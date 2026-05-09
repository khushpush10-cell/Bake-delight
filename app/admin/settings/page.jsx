"use client";

import { useEffect, useState } from "react";
import { Settings as SettingsIcon, Loader2 } from "lucide-react";
import AdminShell from "@/components/AdminShell";
import { useStoreSettings } from "@/context/StoreSettingsContext";

// Lavender color scheme
const colors = {
  primary: '#7B68B5',
  primaryHover: '#6A5A9E',
  lavenderSoft: '#B8A9D9',
  lavenderPale: '#D4CCF0',
  lavenderPaleBg: '#F5F0FF',
  textDark: '#2D1F3D',
  textMuted: '#9B8AAA',
  border: '#E0D8F5',
  white: '#FFFFFF'
};

// Input styles
const inputStyle = {
  width: '100%',
  border: `1.5px solid ${colors.border}`,
  borderRadius: '10px',
  padding: '12px 16px',
  fontSize: '14px',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'all 0.2s',
  background: colors.white,
  color: colors.textDark
};

const labelStyle = {
  display: 'block',
  fontSize: '14px',
  fontWeight: 500,
  color: colors.textDark,
  fontFamily: "'DM Sans', sans-serif",
  marginBottom: '8px'
};

const helperStyle = {
  fontSize: '13px',
  color: colors.textMuted,
  fontFamily: "'DM Sans', sans-serif",
  marginTop: '6px'
};

const cardStyle = {
  background: colors.white,
  border: `1px solid ${colors.border}`,
  borderRadius: '16px',
  padding: '28px',
  marginBottom: '24px'
};

const sectionTitleStyle = {
  fontFamily: "'Playfair Display', serif",
  fontSize: '20px',
  fontWeight: 700,
  color: colors.textDark,
  marginBottom: '24px'
};

export default function AdminSettingsPage() {
  const { settings, updateSettings, loading } = useStoreSettings();
  const [formData, setFormData] = useState(settings);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    setFormData(settings);
  }, [settings]);

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
        [field]: value
      }
    }));
  };

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
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="w-8 h-8" style={{ color: colors.primary }} />
          <h1 className="font-heading text-4xl font-bold" style={{ color: colors.textDark }}>Store Settings</h1>
        </div>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin" style={{ color: colors.primary }} />
          <span className="ml-3" style={{ color: colors.textMuted }}>Loading settings...</span>
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="max-w-3xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="w-8 h-8" style={{ color: colors.primary }} />
          <h1 className="font-heading text-4xl font-bold" style={{ color: colors.textDark }}>Store Settings</h1>
        </div>

        {/* SECTION A — Contact & WhatsApp */}
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Contact & WhatsApp</h2>
          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="923001234567"
              value={formData.whatsappNumber || ''}
              onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
            />
            <p style={helperStyle}>
              This number will be used for WhatsApp checkout and footer contact
            </p>
          </div>
        </div>

        {/* SECTION B — Social Media Links */}
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Social Media Links</h2>
          <div className="space-y-4">
            {[
              { name: 'instagram', label: 'Instagram' },
              { name: 'facebook', label: 'Facebook' },
              { name: 'tiktok', label: 'TikTok' },
              { name: 'twitter', label: 'Twitter' }
            ].map(({ name, label }) => (
              <div 
                key={name} 
                style={{ 
                  border: `1px solid ${colors.border}`, 
                  borderRadius: '12px', 
                  padding: '16px 20px',
                  background: colors.white
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 500, color: colors.textDark }}>
                    {label}
                  </h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData[name]?.show || false}
                      onChange={(e) => handleSocialMediaChange(name, 'show', e.target.checked)}
                      className="w-4 h-4"
                      style={{ accentColor: colors.lavenderSoft }}
                    />
                    <span style={{ fontSize: '13px', color: colors.textMuted, fontFamily: "'DM Sans', sans-serif" }}>
                      {formData[name]?.show ? 'Show' : 'Hide'} on website
                    </span>
                  </label>
                </div>
                <input
                  type="url"
                  style={inputStyle}
                  placeholder={`https://${name}.com/yourprofile`}
                  value={formData[name]?.url || ''}
                  onChange={(e) => handleSocialMediaChange(name, 'url', e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION C — Store Info */}
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Store Info</h2>
          <div className="space-y-5">
            <div>
              <label style={labelStyle}>Store Name</label>
              <input
                type="text"
                style={inputStyle}
                value={formData.storeName || ''}
                onChange={(e) => handleInputChange('storeName', e.target.value)}
              />
            </div>
            <div>
              <label style={labelStyle}>Store Tagline</label>
              <input
                type="text"
                style={inputStyle}
                value={formData.storeTagline || ''}
                onChange={(e) => handleInputChange('storeTagline', e.target.value)}
              />
            </div>
            <div>
              <label style={labelStyle}>Footer Description (max 100 chars)</label>
              <textarea
                style={{ ...inputStyle, minHeight: '80px', resize: 'none' }}
                maxLength={100}
                value={formData.footerDescription || ''}
                onChange={(e) => handleInputChange('footerDescription', e.target.value)}
              />
              <p style={helperStyle}>
                {(formData.footerDescription || '').length}/100 characters
              </p>
            </div>
            <div>
              <label style={labelStyle}>Delivery Info Text</label>
              <input
                type="text"
                style={inputStyle}
                placeholder="🎂 Free delivery on orders above Rs. 3,000"
                value={formData.deliveryInfoText || ''}
                onChange={(e) => handleInputChange('deliveryInfoText', e.target.value)}
              />
              <p style={helperStyle}>
                This text appears in the top navbar bar
              </p>
            </div>
          </div>
        </div>

        {/* SECTION D — Store Hours / Availability */}
        <div style={cardStyle}>
          <h2 style={sectionTitleStyle}>Store Hours / Availability</h2>
          <div className="space-y-5">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.storeOpen || false}
                onChange={(e) => handleInputChange('storeOpen', e.target.checked)}
                className="w-5 h-5"
                style={{ accentColor: colors.lavenderSoft }}
              />
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '15px', fontWeight: 500, color: colors.textDark }}>
                Store is {formData.storeOpen ? 'Open' : 'Closed'}
              </span>
            </label>
            <div>
              <label style={labelStyle}>Closed Message</label>
              <input
                type="text"
                style={inputStyle}
                value={formData.closedMessage || ''}
                onChange={(e) => handleInputChange('closedMessage', e.target.value)}
              />
              <p style={helperStyle}>
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
            className="px-8 py-3 text-sm font-medium text-white rounded-xl transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ 
              background: saveSuccess ? '#16a34a' : colors.primary,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px'
            }}
            onMouseEnter={(e) => {
              if (!isSaving && !saveSuccess) {
                e.currentTarget.style.background = colors.primaryHover;
              }
            }}
            onMouseLeave={(e) => {
              if (!saveSuccess) {
                e.currentTarget.style.background = colors.primary;
              }
            }}
          >
            {isSaving ? (
              <span className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                Saving...
              </span>
            ) : saveSuccess ? (
              'Saved!'
            ) : (
              'Save Settings'
            )}
          </button>
        </div>
      </div>
    </AdminShell>
  );
}
