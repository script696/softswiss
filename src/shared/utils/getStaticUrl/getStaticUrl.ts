export const getStaticUrl = (imageId: string) => {
  const bucketUrl = process.env["REACT_APP_BUCKET_URL"];

  return `${bucketUrl}/i/s2/${imageId}.png`;
};
