import TreeIcon from '../layout/TreeIcon';
export default function Loading() {
  return (
    <>
      <div
        className='d-flex'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TreeIcon treeNumber={0} /> <TreeIcon treeNumber={0.025} />
        <TreeIcon treeNumber={0.05} />
      </div>
      <div
        className='h5 mt-3'
        style={{ fontWeight: '600' }}
      >
        Loading your Forest...
      </div>
    </>
  );
}
