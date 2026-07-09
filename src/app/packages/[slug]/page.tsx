import Link from "next/link";
import { journeys } from "@/data/journeys";
import ItineraryAccordion from "@/components/ItineraryAccordion";

type PageProps = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function JourneyPage({ params }: PageProps) {
	const { slug } = await params;
	const journey = journeys.find((item) => item.slug === slug);

	if (!journey) {
		return (
			<main className="bg-[#e4eef7] px-6 py-40">
				<h1 className="text-4xl text-[#071126]">Journey not found.</h1>
				<Link href="/packages" className="mt-6 inline-block text-[#2f80b9]">
					Back to journeys
				</Link>
			</main>
		);
	}

	return (
		<main className="bg-[#e4eef7]">
			<section className="relative min-h-[70vh] overflow-hidden">
				<img
					src={journey.image}
					alt={journey.title}
					className="absolute inset-0 h-full w-full object-cover"
				/>

				<div className="absolute inset-0 bg-[#071126]/60" />

				<div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-6 pb-20 pt-32 text-white">
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70">
							{journey.destination}
						</p>

						<h1 className="mt-6 max-w-4xl font-serif text-6xl leading-tight md:text-8xl">
							{journey.title}
						</h1>

						<p className="mt-6 text-xl text-white/80">
							{journey.duration} · {journey.nights}
						</p>
					</div>
				</div>
			</section>

			<section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_380px]">
				<div>
					<div className="grid gap-4 md:grid-cols-3">
						{[
							["Transportation", journey.transportation],
							["Tour Type", journey.tourType],
							["Language", journey.language],
							["Fitness Level", journey.fitnessLevel],
							["Group Size", journey.groupSize],
							["Age", `${journey.minimumAge} - ${journey.maximumAge}`],
						].map(([label, value]) => (
							<div key={label} className="rounded-2xl bg-white p-6">
								<p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2f80b9]">
									{label}
								</p>
								<p className="mt-3 font-semibold text-[#071126]">{value}</p>
							</div>
						))}
					</div>

					<section className="mt-16">
						<h2 className="font-serif text-5xl text-[#071126]">Overview</h2>
						<p className="mt-6 text-lg leading-8 text-slate-700">
							{journey.overview}
						</p>
					</section>

					<section className="mt-16">
						<h2 className="font-serif text-5xl text-[#071126]">Highlights</h2>
						<ul className="mt-6 space-y-4 text-lg text-slate-700">
							{journey.highlights.map((item: string) => (
								<li key={item}>• {item}</li>
							))}
						</ul>
					</section>

					<section className="mt-16">
						<h2 className="font-serif text-5xl text-[#071126]">Itinerary</h2>

						<p className="mt-6 text-lg leading-8 text-slate-700">
							{journey.itineraryIntro}
						</p>

						<ItineraryAccordion itinerary={journey.itinerary} />
					</section>

					<section className="mt-16 grid gap-8 md:grid-cols-2">
						<div>
							<h2 className="font-serif text-4xl text-[#071126]">
								Cost Includes
							</h2>

							<ul className="mt-6 space-y-3 text-slate-700">
								{journey.includes.map((item: string) => (
									<li key={item}>✓ {item}</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="font-serif text-4xl text-[#071126]">
								Cost Excludes
							</h2>

							<ul className="mt-6 space-y-3 text-slate-700">
								{journey.excludes.map((item: string) => (
									<li key={item}>× {item}</li>
								))}
							</ul>
						</div>
					</section>
				</div>

				<aside className="h-fit rounded-[2rem] bg-white p-8 shadow-xl lg:sticky lg:top-28">
					<p className="font-serif text-3xl text-[#071126]">{journey.price}</p>
					<p className="mt-2 text-slate-500">{journey.childPrice}</p>

					<div className="mt-6 space-y-3 text-sm text-slate-600">
						<p>✓ Best Price Guaranteed</p>
						<p>✓ No Booking Fees</p>
						<p>✓ Professional Local Guide</p>
					</div>

					<Link
						href={`/contact?trip=${journey.slug}`}
						className="mt-8 block rounded-full bg-[#2f80b9] px-6 py-4 text-center font-bold text-white hover:bg-[#246fa3]">
						Check Availability
					</Link>

					<p className="mt-6 text-center text-sm text-slate-500">
						Need help with booking? Send us a message.
					</p>
				</aside>
			</section>
		</main>
	);
}
