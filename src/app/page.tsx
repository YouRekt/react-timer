import Timer from "./components/timer";

export default function Home() {
	return (
		<div className="bg-[#444] w-full h-screen flex items-center justify-center">
			<Timer title={"My Timer"} endTime={3599} elapsedTime={2500} />
		</div>
	);
}
