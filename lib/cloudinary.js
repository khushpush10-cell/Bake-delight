export async function uploadToCloudinary(file) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  // IMPORTANT: The upload preset MUST be set to "Unsigned" in Cloudinary dashboard
  // Go to: Cloudinary Dashboard → Settings → Upload → Upload Presets
  // Create or edit an upload preset and set Signing Mode to "Unsigned"
  
  if (!cloudName || !uploadPreset) {
    console.error('Missing Cloudinary config:', { cloudName, uploadPreset });
    alert('Image upload not configured. Please add Cloudinary keys to Vercel environment variables and redeploy.');
    return null;
  }

  console.log('Uploading to Cloudinary:', { cloudName, uploadPreset, fileName: file.name });

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    
    if (data.error) {
      console.error('Cloudinary error:', data.error);
      throw new Error(`Cloudinary upload failed: ${data.error.message}`);
    }

    if (!response.ok) {
      console.error('Upload response not ok:', response.status, data);
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    console.log('Upload successful:', data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}
