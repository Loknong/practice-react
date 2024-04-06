import './Header.css'
interface props{
  isToggle:boolean;
  toggle:(value: boolean)=>void;
}
const Header = ({isToggle, toggle}:props) => {
  return (
    <div className='HeaderSection'>
    <button className='bg-gray-500 text-white p-4 nav-button' onClick={()=>{
      toggle(!isToggle)
    }}>Toggle Nav</button>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-lg">My Header Website</h1>
      </header>
    </div>
  );
};

export default Header;
