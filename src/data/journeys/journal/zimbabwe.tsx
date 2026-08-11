import Image from "next/image";

export default function ZimbabweArticle() {
  return (
    <article className="prose prose-lg max-w-none prose-headings:text-[#071126] prose-p:text-slate-700">

      <p className="lead">
        Zimbabwe is one of Southern Africa's most rewarding destinations, yet
        many travellers only visit Victoria Falls before moving on. Beyond the
        famous waterfall lies a country filled with ancient history, dramatic
        landscapes, incredible wildlife and warm hospitality.
      </p>

      <Image
        src="https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/vic%20falls.jpg"
        alt="Victoria Falls in Zimbabwe"
        width={1200}
        height={800}
        className="my-8 rounded-3xl"
      />

      <h2><strong>Hidden Gems You Shouldn't Miss</strong></h2>

      <h3>1. Great Zimbabwe National Monument</h3>

      <p>
        One of Africa's most important archaeological sites, Great Zimbabwe is
        a UNESCO World Heritage Site and the largest ancient stone structure in
        sub-Saharan Africa. The ruins offer a fascinating glimpse into the
        powerful kingdom that once dominated regional trade routes.
      </p>

      <blockquote>
        Travel Tip: Visit early in the morning for cooler temperatures and
        fewer visitors.
      </blockquote>

      <h3>2. Mana Pools National Park</h3>

      <p>
        Located along the Zambezi River, Mana Pools is one of Africa's premier
        wilderness destinations. Known for walking safaris, canoe adventures
        and incredible wildlife encounters, it offers a more intimate safari
        experience than many larger parks.
      </p>

      <h3>3. Eastern Highlands</h3>

      <p>
        Often overlooked by international visitors, Zimbabwe's Eastern
        Highlands feature rolling mountains, waterfalls, forests and tea
        plantations. Destinations such as Nyanga, Vumba and Chimanimani are
        perfect for hiking and nature lovers.
      </p>

      <h3>4. Matobo National Park</h3>

      <p>
        Famous for its dramatic granite rock formations, ancient rock art and
        rhino tracking experiences, Matobo National Park combines natural
        beauty with significant cultural history.
      </p>

      <h3>5. Lake Kariba</h3>

      <p>
        One of the world's largest man-made lakes, Lake Kariba offers stunning
        sunsets, fishing excursions, houseboat adventures and abundant
        wildlife along its shoreline.
      </p>

      <Image
        src="https://mwidvpekdftfmpcz.public.blob.vercel-storage.com/matobo%20hills.jpg"
        alt="Granite formations in Matobo National Park"
        width={1200}
        height={800}
        className="my-8 rounded-3xl"
      />

      <h2>Best Time to Visit Zimbabwe</h2>

<table className="w-full border-collapse border border-slate-400">
  <thead className="bg-sky-700 text-white">
    <tr>
      <th className="border border-slate-300 px-6 py-3 text-left font-semibold">
        Season
      </th>
      <th className="border border-slate-300 px-6 py-3 text-left font-semibold">
        Best For
      </th>
    </tr>
  </thead>
  <tbody>
    <tr className="hover:bg-slate-50">
      <td className="border border-slate-300 px-6 py-3">
        May – August
      </td>
      <td className="border border-slate-300 px-6 py-3">
        Safari and outdoor exploration
      </td>
    </tr>
    <tr className="hover:bg-slate-50">
      <td className="border border-slate-300 px-6 py-3">
        September – November
      </td>
      <td className="border border-slate-300 px-6 py-3">
        Excellent wildlife viewing
      </td>
    </tr>
    <tr className="hover:bg-slate-50">
      <td className="border border-slate-300 px-6 py-3">
        December – April
      </td>
      <td className="border border-slate-300 px-6 py-3">
        Green landscapes and birdwatching
      </td>
    </tr>
  </tbody>
</table>

      <p>
        For most travellers, the dry season between May and October provides
        the best overall experience, especially for wildlife viewing.
      </p>

      <h2>Local Experiences Worth Trying</h2>

      <ul className="list-disc pl-6">
        <li>Traditional Zimbabwean cuisine</li>
        <li>Village cultural experiences</li>
        <li>Sunset cruises on the Zambezi River</li>
        <li>Walking safaris in Mana Pools</li>
        <li>Local craft markets and artisan workshops</li>
      </ul>
      <br />

      <h2><strong>Where Should You Stay?</strong></h2>

      <ul className="list-disc pl-6">
        <li>
          <strong>Luxury:</strong> Victoria Falls Safari Lodges and Mana Pools
          Camps
        </li>
        <li>
          <strong>Mid-range:</strong> Boutique lodges and safari camps
        </li>
        <li>
          <strong>Budget:</strong> Guesthouses and backpacker lodges
        </li>
      </ul>
      
      <br/>

      <h2><strong>Travel Responsibly</strong></h2>

      <p>
        Support local communities, choose responsible safari operators, respect
        wildlife viewing guidelines and purchase authentic locally-made crafts
        whenever possible.
      </p>

      <h2>Why Zimbabwe Deserves a Place on Your Bucket List</h2>

      <p>
        Zimbabwe offers a unique combination of natural wonders, rich cultural
        heritage and authentic travel experiences that remain largely untouched
        by mass tourism.
      </p>

      <p>
        Whether you're exploring Victoria Falls, tracking wildlife in Mana
        Pools or discovering ancient history at Great Zimbabwe, you'll find a
        destination full of unforgettable moments and genuine African
        hospitality.
      </p>

      <p>
        At To Nations Tours, we help travellers experience Zimbabwe beyond the
        obvious highlights, creating journeys that connect people with the
        country's landscapes, wildlife and culture.
      </p>

    </article>
  );
}