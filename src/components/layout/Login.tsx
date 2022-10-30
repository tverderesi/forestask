import TreeIcon from './TreeIcon';
export default function Loading() {
  return (
    <div
      style={{
        zIndex: '10',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        backdropFilter: 'blur(50px)',
        backgroundColor: '#dfdfdfb3',
      }}
      className='d-flex flex-column align-self-center justify-self-center align-items-center justify-content-center'
    >
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
    </div>
  );
}
