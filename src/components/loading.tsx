import SyncLoader from 'react-spinners/SyncLoader';

function LoadingComponent() {
    return (
        <div style={{ width: '100%', height: '100%', padding: '1rem'}} className='d-flex justify-content-center align-items-center'>
            <SyncLoader
                color='grey'
                loading={true}
                size={10}
                aria-label='Loading'
            />
        </div>
    );
}

export default LoadingComponent;