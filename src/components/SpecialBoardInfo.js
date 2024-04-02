const SpecialBoardInfo = ({ offer }) => {
  return (
    <div className="flex-1 flex justify-end p-4">
      <div className="bg-yellow-400 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Special Offer!</h2>
        <p className="mb-2">Get {offer}% off on all orders!</p>
        <p>Hurry up! Limited time offer.</p>
      </div>
    </div>
  );
};
export default SpecialBoardInfo;
