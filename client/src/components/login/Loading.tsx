import TreeIcon from '../layout/icons/TreeIcon';

export default function Loading() {
  return (
    <div>
      <div className='flex mx-auto'>
        <TreeIcon treeNumber={0} /> <TreeIcon treeNumber={0} />
        <TreeIcon treeNumber={0} />
      </div>
      <div className='text-2xl mt-3 text-center font-semibold'>
        Loading your Forest...
      </div>
    </div>
  );
}
