import profile from '../../assets/images/profile.png' ;

const Header = () => {
    return (
        <div className="container flex justify-between p-4 item-center  border-b-2">
            <h2 className='text-4xl'>Knowledge Cafe </h2>
            <img src={profile} alt="" className='w-10 h-10' />
        </div>
    );
};

export default Header;