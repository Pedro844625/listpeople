import React, { useRef } from 'react';


const Captura = () => {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    React.useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch(err => {
                alert('Erro ao acessar a webcam: ' + err);
            });
    }, []);

    const handleCapture = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;

        if (video && canvas) {
            const context = canvas.getContext('2d');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);

            const base64Image = canvas.toDataURL('image/png');
            alert(base64Image);

        }
    };

    return (
        <div>
            <video ref={videoRef} autoPlay width="320" height="240" />
            <br />
            <button onClick={handleCapture}>Capturar Foto</button>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
};

export default Captura;
