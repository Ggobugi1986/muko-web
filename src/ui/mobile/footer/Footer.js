import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="mb-4 bg-slate-300" style={{ height: 1 }} />
      <div className="mb-4 px-4">
        <div className="text-sm font-bold text-slate-900">뮤코 하우스</div>
      </div>
      <div className="mb-4 px-4">
        <div className="text-xs text-slate-500">대표: 고현정</div>
        <div className="text-xs text-slate-500">
          주소: 경기도 용인시 기흥구 평촌3로 5-13
        </div>
      </div>
    </div>
  );
};

export default Footer;
