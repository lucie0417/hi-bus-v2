import loadingLogo from "../assets/images/DaBus-logo.png";

const Loading = () => {
	return (
		<div className='bg-black min-h-screen flex flex-col justify-center items-center'>
			<img src={loadingLogo} width={60} alt="" />
		</div>
	)
}

export default Loading;