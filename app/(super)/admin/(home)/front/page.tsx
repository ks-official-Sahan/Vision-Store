// import React from "react";

// const FrontPage = () => {
//   return (
//     <>
//       <div className="flex flex-col small:flex-row small:items-start py-6 content-container">
//         <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
//           <div className="flex gap-x-3 flex-col gap-y-3">
//             <p className="font-normal font-sans txt-medium txt-compact-small-plus text-ui-fg-muted">
//               Sort by
//             </p>
//             <div
//               role="radiogroup"
//               aria-required="false"
//               dir="ltr"
//               className="grid gap-2"
//               // tabindex="0"
//               // style="outline: none;"
//             >
//               <div className="flex gap-x-2 items-center ml-[-1.75rem]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="none"
//                 >
//                   <circle cx="10" cy="10" r="2" fill="currentColor"></circle>
//                 </svg>
//                 <button
//                   type="button"
//                   role="radio"
//                   aria-checked="true"
//                   data-state="checked"
//                   value="created_at"
//                   className="group relative h-5 w-5 items-center justify-center outline-none hidden peer"
//                   id="created_at"
//                   // tabindex="-1"
//                   data-radix-collection-item=""
//                 >
//                   <div className="shadow-borders-base bg-ui-bg-base transition-fg flex h-[14px] w-[14px] items-center justify-center rounded-full group-hover:bg-ui-bg-base-hover group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow group-focus:!shadow-borders-interactive-with-focus group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base">
//                     <span
//                       data-state="checked"
//                       className="flex items-center justify-center"
//                     >
//                       <div className="bg-ui-bg-base shadow-details-contrast-on-bg-interactive group-disabled:bg-ui-fg-disabled h-1.5 w-1.5 rounded-full group-disabled:shadow-none"></div>
//                     </span>
//                   </div>
//                 </button>
//                 <label
//                   className="font-sans txt-compact-medium font-normal !txt-compact-small !transform-none hover:cursor-pointer text-ui-fg-base"
//                   // placeholder="Latest Arrivals"
//                   // for="created_at"
//                 >
//                   Latest Arrivals
//                 </label>
//               </div>
//               <div className="flex gap-x-2 items-center">
//                 <button
//                   type="button"
//                   role="radio"
//                   aria-checked="false"
//                   data-state="unchecked"
//                   value="price_asc"
//                   className="group relative h-5 w-5 items-center justify-center outline-none hidden peer"
//                   id="price_asc"
//                   // tabindex="-1"
//                   data-radix-collection-item=""
//                 >
//                   <div className="shadow-borders-base bg-ui-bg-base transition-fg flex h-[14px] w-[14px] items-center justify-center rounded-full group-hover:bg-ui-bg-base-hover group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow group-focus:!shadow-borders-interactive-with-focus group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base"></div>
//                 </button>
//                 <label
//                   className="font-sans txt-compact-medium font-normal !txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer"
//                   // placeholder="Price: Low -> High"
//                   // for="price_asc"
//                 >
//                   Price: Low -&gt; High
//                 </label>
//               </div>
//               <div className="flex gap-x-2 items-center">
//                 <button
//                   type="button"
//                   role="radio"
//                   aria-checked="false"
//                   data-state="unchecked"
//                   value="price_desc"
//                   className="group relative h-5 w-5 items-center justify-center outline-none hidden peer"
//                   id="price_desc"
//                   // tabindex="-1"
//                   data-radix-collection-item=""
//                 >
//                   <div className="shadow-borders-base bg-ui-bg-base transition-fg flex h-[14px] w-[14px] items-center justify-center rounded-full group-hover:bg-ui-bg-base-hover group-data-[state=checked]:bg-ui-bg-interactive group-data-[state=checked]:shadow-borders-interactive-with-shadow group-focus:!shadow-borders-interactive-with-focus group-disabled:!bg-ui-bg-disabled group-disabled:!shadow-borders-base"></div>
//                 </button>
//                 <label
//                   className="font-sans txt-compact-medium font-normal !txt-compact-small !transform-none text-ui-fg-subtle hover:cursor-pointer"
//                   // placeholder="Price: High -> Low"
//                   // for="price_desc"
//                 >
//                   Price: High -&gt; Low
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="w-full">
//           <div className="mb-8 text-2xl-semi">
//             <h1>All products</h1>
//           </div>
//           <ul className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
//             <li>
//               <a
//                 className="group"
//                 href="/us/products/blend-master-elite-fusionator"
//               >
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fblender-nobg-1700674984144.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       BlendMaster Elite Fusionator
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium line-through text-ui-fg-muted">
//                         $299.00
//                       </p>
//                       <p className="font-normal font-sans txt-medium text-ui-fg-interactive">
//                         $199.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a
//                 className="group"
//                 href="/us/products/corporate-commando-throne"
//               >
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       // srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=3840&amp;q=50 3840w" src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fchair-nobg-1700675020905.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Corporate Commando Throne
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium line-through text-ui-fg-muted">
//                         $600.00
//                       </p>
//                       <p className="font-normal font-sans txt-medium text-ui-fg-interactive">
//                         $550.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/decibel-dominator-deluxe">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       // srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=3840&amp;q=50 3840w" src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fradio-nobg-1700675050588.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Decibel Dominator Deluxe
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium line-through text-ui-fg-muted">
//                         $249.00
//                       </p>
//                       <p className="font-normal font-sans txt-medium text-ui-fg-interactive">
//                         $199.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/nebula-noir-hoodie">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fhoodie-nobg-1700675072425.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Nebula Noir Hoodie
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $199.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/exorbita-elegance-elite">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fwatch-nobg-1700675096621.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Exorbita Elegance Elite
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $1,199.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/steel-lamp">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       // srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=3840&amp;q=50 3840w" src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Flamp-nobg-1700675116934.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Metallic Majesty Illuminator
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $399.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/bluetooth-headphones">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fheadphones-nobg-1700675136219.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Audio Arrogance AuralElite
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $249.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/leather-backpack">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fbag-nobg-1700675158493.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Pinnacle Posh Pack
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $405.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//             <li>
//               <a className="group" href="/us/products/analog-turntable">
//                 <div>
//                   <div className="rounded-lg relative overflow-hidden p-4 bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover transition-shadow ease-in-out duration-150 aspect-[9/16] w-full">
//                     <img
//                       alt="Thumbnail"
//                       draggable="false"
//                       loading="lazy"
//                       decoding="async"
//                       data-nimg="fill"
//                       className="absolute inset-0 object-cover object-center"
//                       sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px"
//                       srcset="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=16&amp;q=50 16w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=32&amp;q=50 32w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=48&amp;q=50 48w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=64&amp;q=50 64w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=96&amp;q=50 96w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=128&amp;q=50 128w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=256&amp;q=50 256w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=384&amp;q=50 384w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=640&amp;q=50 640w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=750&amp;q=50 750w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=828&amp;q=50 828w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=1080&amp;q=50 1080w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=1200&amp;q=50 1200w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=1920&amp;q=50 1920w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=2048&amp;q=50 2048w, /_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=3840&amp;q=50 3840w"
//                       src="/_next/image?url=https%3A%2F%2Fmedusa-server-testing.s3.us-east-1.amazonaws.com%2Fturntable-nobg-1700675179097.png&amp;w=3840&amp;q=50"
//                       // style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
//                     />
//                   </div>
//                   <div className="flex txt-compact-medium mt-4 justify-between">
//                     <p className="font-normal font-sans txt-medium text-ui-fg-subtle">
//                       Vinyl Virtuoso Opulenza
//                     </p>
//                     <div className="flex items-center gap-x-2">
//                       <p className="font-normal font-sans txt-medium text-ui-fg-muted">
//                         $699.00
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FrontPage;
