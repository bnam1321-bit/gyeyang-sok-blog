'use client';

export default function FloatingBar() {
    return (
        <div className="floating-bar">
            <a href="tel:032-716-9575" className="floating-item">
                <div className="floating-icon">?뱸</div>
                <div className="floating-label">?꾪솕</div>
            </a>

            <button
                onClick={() => {
                    const hours = document.getElementById('clinic-hours');
                    if (hours) hours.scrollIntoView({ behavior: 'smooth' });
                }}
                className="floating-item"
            >
                <div className="floating-icon">?븧</div>
                <div className="floating-label">吏꾨즺?쒓컙</div>
            </button>

            <a
                href="https://map.naver.com/p/search/?몄쿇愿묒뿭??20以묎뎄%20?섎뒛以묒븰濡?20197"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-item"
            >
                <div className="floating-icon">?뱧</div>
                <div className="floating-label">?ㅼ떆?붽만</div>
            </a>


        </div>
    );
}
