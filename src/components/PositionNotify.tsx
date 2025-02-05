import { Button } from "@/components/ui/button"
import { RiCrosshair2Line } from "react-icons/ri";

const PositionNotify = () => {
	return (
		<>
			<div className="flex items-center bg-red100 rounded-lg p-2 my-4">
				<RiCrosshair2Line size={36} className="text-red300 mx-1" />
				<p className="text-xs/5 text-gray600 font-normal mx-1">建議允許定位功能取用您的位置以獲得更完整的服務</p>
				<Button size="sm" className="bg-red300 mx-1">同意</Button>
				<Button size="sm" className="bg-red300">拒絕</Button>
			</div>


			<div className="flex justify-center items-center bg-brown100 rounded-lg p-2 my-4">
				<RiCrosshair2Line size={24} className="text-brown500 mr-1" />
				<p className="text-xs text-gray600 font-normal mx-1">您已同意開啟定位服務</p>
			</div>

			<div className="flex justify-center items-center bg-red100 rounded-lg p-2 my-4">
				<RiCrosshair2Line size={24} className="text-red300 mr-1" />
				<p className="text-xs text-gray600 font-normal mx-1">您未同意開啟定位服務</p>
			</div>
		</>
	)
}

export default PositionNotify;