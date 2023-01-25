import ManageCardsIcon from '../icons/ManageCardsIcon';

export default function ManageCards({ dispatch }: { dispatch: any }) {
  return (
    <button
      className='btn-transparent flex flex-col items-center justify-between p-3 basis-1/3'
      key='manageCards'
    >
      Manage Cards
    </button>
  );
}
