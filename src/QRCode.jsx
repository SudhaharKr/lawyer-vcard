import MaryAnden from "./assets/QR-Code/Mary_Anden.png";
import QRCodeImg from "./assets/QR-Code/qr-code-blue.png";

const QRCode = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center pt-10">
        <h2 className="text-3xl font-bold text-blue-950">QR Code</h2>
        <div className="mt-4">
          <img
            src={MaryAnden}
            alt="MaryAnden Image"
            width={100}
            className="rounded-full border-4 border-blue-950"
          />
        </div>
        <div className="mt-4">
          <img src={QRCodeImg} alt="QR Code Image" className="w-full" />
        </div>
        <button className="mt-4 bg-blue-950 py-3 px-8 rounded-lg text-white font-semibold">
          Download My QR Code
        </button>
      </div>
    </div>
  );
};

export default QRCode;
