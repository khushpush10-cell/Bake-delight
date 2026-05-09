export async function GET() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  
  return Response.json({
    cloudName: cloudName || 'NOT SET',
    uploadPreset: uploadPreset || 'NOT SET',
    cloudNameLength: cloudName ? cloudName.length : 0,
    uploadPresetLength: uploadPreset ? uploadPreset.length : 0,
    allEnvVars: Object.keys(process.env).filter(key => key.includes('CLOUDINARY') || key.includes('NEXT_PUBLIC'))
  });
}
