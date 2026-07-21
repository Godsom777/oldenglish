import React, { useState, useRef } from 'react';
import { X, Upload, Download, FileText, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { parseMenuCsv, downloadSampleMenuCsv } from '../utils/csvParser';

export const CsvUploaderModal = ({ isOpen, onClose, onCsvParsed, onResetDefaultMenu }) => {
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [parsedPreview, setParsedPreview] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.name.endsWith('.csv')) {
      setErrorMsg('Please upload a valid .csv file.');
      return;
    }

    setErrorMsg(null);
    setLoading(true);

    try {
      const items = await parseMenuCsv(file);
      setParsedPreview(items);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to parse CSV file.');
      setParsedPreview(null);
    } finally {
      setLoading(false);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleApply = () => {
    if (parsedPreview && parsedPreview.length > 0) {
      onCsvParsed(parsedPreview);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
          <div>
            <h3 className="font-serif text-2xl font-bold text-zinc-900 flex items-center gap-2">
              <Upload size={20} className="text-red-600" />
              Dynamic Menu CSV Uploader
            </h3>
            <p className="text-xs text-zinc-500 font-medium mt-1">
              Upload your customized menu CSV file to update Old English dishes instantly.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white text-zinc-500 hover:text-zinc-900 flex items-center justify-center border border-zinc-200 shadow-sm"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Template Banner */}
          <div className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span className="text-xs text-zinc-700 font-medium">
              Need a starting format? Download our official CSV template.
            </span>
            <button
              onClick={downloadSampleMenuCsv}
              className="btn-secondary text-xs px-3.5 py-1.5 shrink-0"
            >
              <Download size={13} className="text-red-600" />
              <span>Download Template</span>
            </button>
          </div>

          {/* Upload Dropzone */}
          <div
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-3xl p-8 text-center cursor-pointer transition-all ${
              dragActive
                ? 'border-red-600 bg-red-50/60'
                : 'border-zinc-300 hover:border-zinc-400 bg-zinc-50/50'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
            />

            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3 shadow-sm">
              <FileText size={24} />
            </div>

            <h4 className="text-sm font-bold text-zinc-900 mb-1">
              Drag & Drop your CSV file here
            </h4>
            <p className="text-xs text-zinc-500 mb-3">
              Supports headers: <code className="text-zinc-800 font-semibold">Name</code>, <code className="text-zinc-800 font-semibold">Category</code>, <code className="text-zinc-800 font-semibold">Price</code>, <code className="text-zinc-800 font-semibold">Spicy</code>, <code className="text-zinc-800 font-semibold">Description</code>, <code className="text-zinc-800 font-semibold">Tags</code>, <code className="text-zinc-800 font-semibold">Image</code>
            </p>

            <span className="btn-secondary text-xs inline-flex px-4 py-2 font-bold">
              Browse Computer
            </span>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 font-medium">
              <AlertCircle size={16} className="shrink-0 text-red-600" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Parsed Preview Table */}
          {parsedPreview && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 flex items-center gap-1.5">
                  <CheckCircle2 size={15} /> Ready to Load ({parsedPreview.length} Items Detected)
                </span>
              </div>

              <div className="max-h-48 overflow-y-auto border border-zinc-200 rounded-2xl bg-white shadow-sm">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 text-zinc-600 sticky top-0 border-b border-zinc-200 font-bold">
                    <tr>
                      <th className="p-3">Item Name</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Spice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 text-zinc-800 font-medium">
                    {parsedPreview.map((item, idx) => (
                      <tr key={idx} className="hover:bg-zinc-50">
                        <td className="p-3 font-bold text-zinc-900">{item.name}</td>
                        <td className="p-3 text-zinc-500">{item.category}</td>
                        <td className="p-3 font-bold text-red-600">${item.price}</td>
                        <td className="p-3 text-zinc-600">{item.spicyLevel > 0 ? `🌶️ ${item.spicyLevel}` : '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between gap-3">
          <button
            onClick={onResetDefaultMenu}
            className="text-xs text-zinc-600 hover:text-zinc-900 font-semibold flex items-center gap-1.5"
          >
            <RefreshCw size={13} /> Restore Defaults
          </button>

          <div className="flex items-center gap-2">
            <button onClick={onClose} className="btn-secondary text-xs px-4 py-2 font-bold">
              Cancel
            </button>

            <button
              onClick={handleApply}
              disabled={!parsedPreview || parsedPreview.length === 0}
              className={`btn-primary text-xs px-5 py-2 font-bold ${
                !parsedPreview ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Apply Custom Menu ({parsedPreview?.length || 0})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
