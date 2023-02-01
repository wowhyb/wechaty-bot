
import QRCode from "qrcode";
async function onScan (qrcode, status) {
  const qrcodeImageUrl = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`;
  console.log(`💡 Scan QR Code to login: ${status}\n${qrcodeImageUrl}`);
  console.log(
    await QRCode.toString(qrcode, { type: "terminal", small: true })
  );
}

export default onScan