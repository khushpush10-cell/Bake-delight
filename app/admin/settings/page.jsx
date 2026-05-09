"use client";

import { Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";
import AdminShell from "@/components/AdminShell";
import { useStoreSettings } from "@/context/StoreSettingsContext";

// TikTok SVG Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.69 2.58-4.84 1.66-1.31 3.98-1.64 6.05-1.08.01 1.53-.01 3.05-.02 4.58-.91-.33-1.96-.5-2.87.11-1.07.69-1.57 2.08-1.14 3.32.33 1.22 1.59 2.06 2.85 1.87 1.08-.14 2.02-1.06 2.08-2.16.03-1.78.01-3.57.01-5.35.01-4.03.01-8.05.02-12.07z"/>
  </svg>
);

export default function AdminSettingsPage() {
  const { settings, updateSettings, loading } = useStoreSettings();
  const [formData, setFormData] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialMediaChange = (platform, field, value) => {
    setFormData(prev => ({
      ...prev,
      [platform]: {
        ...prev[platform],
        [field]: field === 'show' ? value : value
      }
    }));
  };

  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    const success = await updateSettings(formData);
    if (success) {
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    }
    setIsSaving(false);
  };

  if (loading) {
    return (
      <AdminShell>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <SettingsIcon className="w-8 h-8 text-primary" />
          <h1 className="font-heading text-4xl font-bold text-textDark">Store Settings</h1>
        </div>

        {/* SECTION A — Contact & WhatsApp */}
        <div className="admin-card">
          <h2 className="font-heading text-2xl font-bold text-textDark mb-6">Contact & WhatsApp</h2>
          <div className="space-y-4">
            <div>
              <label className="label">WhatsApp Number</label>
              <input
                type="text"
                className="field"
                placeholder="923001234567"
                value={formData.whatsappNumber}
                onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
              />
              <p className="mt-2 text-sm text-textMuted">
                This number will be used for WhatsApp checkout and footer contact
              </p>
            </div>
          </div>
        </div>

        {/* SECTION B — Social Media Links */}
        <div className="admin-card">
          <h2 className="font-heading text-2xl font-bold text-textDark mb-6">Social Media Links</h2>
          <div className="space-y-6">
            {[
              { name: 'instagram', icon: 'Instagram' },
              { name: 'facebook', icon: 'Facebook' },
              { name: 'tiktok', icon: 'TikTok' },
              { name: 'twitter', icon: 'Twitter' }
            ].map(({ name, icon }) => (
              <div key={name} className="border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-textDark capitalize">{icon}</h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData[name]?.show || false}
                      onChange={(e) => handleSocialMediaChange(name, 'show', e.target.checked)}
                      className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
                    />
                    <span className="text-sm text-textMuted">
                      {formData[name]?.show ? 'Show' : 'Hide'} on website
                    </span>
                  </label>
                </div>
                <input
                  type="url"
                  className="field"
                  placeholder={`https://${name}.com/yourprofile`}
                  value={formData[name]?.url || ''}
                  onChange={(e) => handleSocialMediaChange(name, 'url', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — Store Info */}
        <div className="admin-card">
          <h2 className="font-heading text-2xl font-bold text-textDark mb-6">Store Info</h2>
          <div className="space-y-4">
            <div>
              <label className="label">Store Name</label>
              <input
                type="text"
                className="field"
                value={formData.storeName}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
              />
            </div>
            <div>
              <label className="label">Store Tagline</label>
              <input
                type="text"
                className="field"
                value={formData.storeTagline}
                onChange={(e) => handleInputChange('storeTagline', e.target.value)}
              />
            </div>
            <div>
              <label className="label">Footer Description (max 100 chars)</label>
              <textarea
                className="field min-h-20"
                maxLength="100"
                value={formData.footerDescription}
                onChange={(e) => handleInputChange('footerDescription', e.target.value)}
              />
              <p className="mt-1 text-sm text-textMuted">
                {formData.footerDescription.length}/100 characters
              </p>
            </div>
            <div>
              <label className="label">Delivery Info Text</label>
              <input
                type="text"
                className="field"
                placeholder="🎂 Free delivery on orders above Rs. 3,000"
                value={formData.deliveryInfoText}
                onChange={(e) => handleInputChange('deliveryInfoText', e.target.value)}
              />
              <p className="mt-2 text-sm text-textMuted">
                This text appears in the top navbar bar
              </p>
            </div>
          </div>
        </div>

        {/* SECTION D — Store Hours / Availability */}
        <div className="admin-card">
          <h2 className="font-heading text-2xl font-bold text-textDark mb-6">Store Hours / Availability</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.storeOpen}
                  onChange={(e) => handleInputChange('storeOpen', e.target.checked)}
                  className="w-4 h-4 text-primary focus:ring-primary border-border rounded"
                />
                <span className="font-semibold text-textDark">
                  Store is {formData.storeOpen ? 'Open' : 'Closed'}
                </span>
              </label>
            </div>
            <div>
              <label className="label">Closed Message</label>
              <input
                type="text"
                className="field"
                value={formData.closedMessage}
                onChange={(e) => handleInputChange('closedMessage', e.target.value)}
              />
              <p className="mt-2 text-sm text-textMuted">
                This message will be shown when the store is closed
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className={`btn-primary px-8 py-3 disabled:opacity-60 disabled:cursor-not-allowed ${
              saveSuccess ? 'bg-green-600 hover:bg-green-700' : ''
            }`}
          >
            {isSaving ? 'Saving...' : saveSuccess ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>
    </AdminShell>
  );
}
