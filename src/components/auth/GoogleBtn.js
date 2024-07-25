const GoogleBtn = () => {
    return(
        <div className="rounded-3xl text-black w-full py-2 
            cursor-pointer select-none text-lg border flex items-center px-[90px]">
                <div className="flex-1 text-left">Sign in with Google</div>
                <img src="/images/google.png" alt="" className="w-[30px]"/>
        </div>
    )
}

export default GoogleBtn;