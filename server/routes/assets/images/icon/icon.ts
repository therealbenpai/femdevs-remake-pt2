// import { NextResponse } from 'next/server';
import fs from 'fs';

// export async function GET(request, { params }) {
//     const options = fs.readdirSync(`${process.cwd()}/assets/media/logos/`);
//     return new NextResponse(
//         fs.readFileSync(`${process.cwd()}/assets/media/logos/${options.at(Math.floor(Math.random() * options.length))}`),
//         {
//             headers: {
//                 'Cache-Control': 'no-store',
//                 'Expires': '0',
//                 'div-Type': 'image/svg+xml',
//             },
//         }
//     );
// }

export default defineEventHandler(async (event) => {
    const options = fs.readdirSync(`${process.cwd()}/public/logos/`);
    return event.$fetch(`/logos/${options.at(Math.floor(Math.random() * options.length))}`);
})
