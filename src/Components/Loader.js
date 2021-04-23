import { ReactComponent as Spinner } from '../Assets/Icons/spinner.svg';

const Loader = () => {
    return ( 
        <div className="loader">
            <div className="loader__spinner">
            <Spinner />
            </div>
        </div>
     );
}
 
export default Loader;