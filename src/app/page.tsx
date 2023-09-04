'use client';

import { Button } from '@/components/primitive';

export default function Home() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <Button
                variant="text"
                color="primary"
                size="large"
                textTransform="capitalize"
            >
                Click me
            </Button>
        </div>
    );
}
