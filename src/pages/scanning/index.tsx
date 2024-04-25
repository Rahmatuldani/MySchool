/* eslint-disable @typescript-eslint/no-explicit-any */
import { Html5Qrcode } from "html5-qrcode";
import React from "react";

const scannerId: string = 'qr-reader';

function ScanPage() {
    const [result, setResult] = React.useState<string>('');

    React.useEffect(() => {
        const scanner = new Html5Qrcode(scannerId);

        const startScanner = async () => {
            try {
                await scanner.start(
                    { facingMode: 'environment' },
                    { fps: 10, qrbox: 250 },
                    (result: string) => {
                        console.log('Result : ', result);
                        setResult(result);
                        scanner.stop();
                    },
                    undefined
                );
            } catch (error) {
                console.error('Error starting scanner : ', error);
            }
        };

        startScanner();

        return () => {
            scanner.clear();
            Html5Qrcode.getCameras().then((cameras) => {
                if (cameras && cameras.length) {
                    scanner.stop();
                }
            });
        };
    }, []);

    return (
        <>
            Scan ScanPage
            <div id={scannerId} style={{ width: '100%', maxWidth: '400px' }} />
            <p>Result : {result}
            </p>
        </>
    );
}

export default ScanPage;