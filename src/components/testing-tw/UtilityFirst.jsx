import warning from '../layout/assets/warning.svg';

function UtilityFirst() {
  return (
    <div>
      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
        <img className="w-12 h-12" src={warning} alt="" />
        <div>
          {' '}
          <div className="text-xl font-medium text-black">Are you sure</div>
          <p className="text-sm text-slate-500">You are about to delete a post</p>
        </div>
      </div>
      <div className="flex items-center p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
        <img className="w-12" src={warning} alt="" />
        <div>
          {' '}
          <div className="text-xl font-medium text-black">Are you sure</div>
          <p className="text-sm text-slate-500">You are about to delete a post</p>
        </div>
      </div>
    </div>
  );
}

export default UtilityFirst;
