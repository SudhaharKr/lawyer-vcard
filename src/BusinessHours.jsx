const BusinessHours = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center pt-10">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <h2 className="text-3xl font-bold text-blue-950">Business Hours</h2>
            <div className="border border-gray-300 rounded-lg p-4 bg-blue-950 text-white font-semibold overflow-hidden">
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-4">
                  <div className="flex justify-between">
                    <span>Sunday :</span>
                    <span>08:10 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monday :</span>
                    <span>08:10 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tuesday :</span>
                    <span>08:10 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wednesday :</span>
                    <span>08:10 - 10:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday :</span>
                    <span>08:10 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday :</span>
                    <span>08:10 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday :</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
