'use client';

import Image, { StaticImageData } from 'next/image';
interface Tool {
    id: number | string;
    src: string | StaticImageData;
    description?: string;
}

interface ToolsPlatformsProps {
    data?: Tool[];
}
export default function ToolsPlatforms({ data }: ToolsPlatformsProps) {
    return (
        <div className="max-w-4xl px-4 py-12 mx-auto">
            <h2 className="mb-10 text-3xl font-bold text-center">Tools & Platforms</h2>
            <div className="space-y-8">
                {data?.map((tool) => (
                    <div key={tool?.id} className="flex items-start space-x-4">
                        <div className="relative w-12 h-12">
                            <Image src={tool.src} alt={"digital edify"} layout="fill" objectFit="contain" />
                        </div>
                        <div>
                            <p className="text-gray-600">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
