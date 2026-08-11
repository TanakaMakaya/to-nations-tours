import Image from "next/image";
import Link from "next/link";

export default function SafariPackingArticle() {
  return (
		<article className="prose prose-lg max-w-none prose-headings:text-[#071126] prose-p:text-slate-700">
			<p className="lead">
				An African safari is unlike any other holiday. One moment you're
				watching elephants at sunrise, and the next you're spotting lions
				resting beneath an acacia tree. The experience is unforgettable—but
				packing the right items can make your adventure even more enjoyable.
			</p>

			<Image
				src="https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/safari%20preparing.jpg"
				alt="Safari traveller preparing for an African safari"
				width={1200}
				height={800}
				className="my-8 rounded-3xl"
			/>

			<p>
				The good news is that you don't need expensive safari gear. A few
				practical essentials will keep you comfortable, prepared and ready to
				enjoy every moment of your adventure.
			</p>
			<br />

			<h2>
				<strong>Safari Clothing Essentials</strong>
			</h2>

			<p>
				Comfort is key when spending time outdoors. We recommend packing the
				following items for most safari destinations:
			</p>

			<ul className="list-disc pl-6">
				<li>Neutral-coloured clothing (khaki, olive, beige or brown)</li>
				<li>Lightweight shirts and trousers</li>
				<li>A warm fleece or jacket for early morning game drives</li>
				<li>Comfortable walking shoes</li>
				<li>A wide-brimmed hat or cap</li>
				<li>A light rain jacket depending on the season</li>
			</ul>

			<blockquote>
				Top Tip: Avoid bright colours and camouflage clothing. Neutral colours
				help you blend into the natural environment, while camouflage is
				restricted in some African countries.
			</blockquote>

			<br />

			<h2>
				<strong>Don't Forget These Essentials</strong>
			</h2>

			<p>
				Your safari bag should also include a few important items that can make
				a big difference during long days exploring national parks.
			</p>

			<ul className="list-disc pl-6">
				<li>Sunscreen (SPF 30 or higher)</li>
				<li>Sunglasses</li>
				<li>Insect repellent</li>
				<li>Lip balm</li>
				<li>Reusable water bottle</li>
				<li>Personal medication</li>
				<li>Small first-aid kit</li>
				<li>Travel adapter</li>
				<li>Portable power bank</li>
			</ul>

			<Image
				src="https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/travel%20gear.jpg"
				alt="Safari essentials and travel gear"
				width={1200}
				height={800}
				className="my-8 rounded-3xl"
			/>

			<h2>
				{" "}
				<strong>Bring a Camera (or Smartphone)</strong>
			</h2>

			<p>
				Safaris are filled with unforgettable moments, from a leopard resting in
				a tree to a herd of elephants crossing the road. A camera with a zoom
				lens is ideal, but modern smartphones can also capture incredible
				photographs.
			</p>

			<p>
				If you're bringing binoculars, even better—they'll help you spot
				wildlife hidden in the distance.
			</p>
			<br />
			<h2>
				<strong>Pack Light</strong>
			</h2>

			<p>
				Most safari lodges and domestic flights have luggage limits, so try to
				pack only what you'll need. A soft-sided travel bag is often easier to
				transport than a hard-shell suitcase, especially if you're travelling
				between multiple destinations.
			</p>
			<br />

			<h2>
				<strong>Be Ready for Changing Weather</strong>
			</h2>

			<p>
				African weather can change quickly. Early morning game drives are often
				cool, while afternoons can become quite warm. The easiest solution is to
				wear layers that you can add or remove throughout the day.
			</p>

      <br/>

			<h2>
				<strong>Safari Etiquette</strong>
			</h2>

			<p>
				A great safari isn't only about what you pack—it's also about how you
				experience it. Responsible behaviour helps protect Africa's incredible
				wildlife for generations to come.
			</p>

			<ul className="list-disc pl-6">
				<li>Listen to your guide's instructions</li>
				<li>Keep noise to a minimum around wildlife</li>
				<li>Never feed or approach wild animals</li>
				<li>Stay inside the vehicle unless instructed otherwise</li>
				<li>Respect nature and leave no litter behind</li>
			</ul>

			<br />
			<h2>
				<strong>Travel Like a Local</strong>
			</h2>

			<p>
				The best wildlife sightings often happen early in the morning. Even if
				waking up before sunrise feels difficult, it's worth it. Animals are
				usually more active in the cooler hours, giving you a better chance of
				spotting predators and other iconic species.
			</p>
			<br />

			<h2>
				<strong>Travel Responsibly</strong>
			</h2>

			<p>
				Every safari is an opportunity to support conservation. Choose tour
				operators and lodges that respect wildlife, support local communities
				and promote sustainable tourism. Responsible travel helps preserve
				Africa's unique ecosystems while creating meaningful benefits for local
				people. :contentReference[oaicite:11]
			</p>

			<br />

			<h2>
				<strong>Ready for Your African Safari?</strong>
			</h2>

			<p>
				Whether you're dreaming of tracking the Big Five in South Africa's
				Kruger National Park, exploring Botswana's Chobe National Park or
				combining your safari with the spectacular Victoria Falls in Zimbabwe,
				To Nations Tours can help you plan a journey tailored to your interests
				and budget.
			</p>

			<div className="not-prose mt-12 rounded-3xl bg-[#071126] p-8 text-center text-white">
				<h3 className="mb-4 text-3xl font-serif">Start Planning Your Safari</h3>

				<p className="mb-6 text-slate-300">
					Let us help you create a personalised African safari experience filled
					with unforgettable wildlife encounters.
				</p>

				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<Link
						href="/packages"
						className="rounded-full bg-[#2f80b9] px-6 py-3 font-semibold text-white transition hover:bg-[#25689a]">
						View Safari Packages
					</Link>

					<Link
						href="/contact"
						className="rounded-full border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#071126]">
						Plan Your Journey
					</Link>
				</div>
			</div>
		</article>
	);
}