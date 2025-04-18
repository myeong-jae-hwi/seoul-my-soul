import { Marker } from '@/types/marker';

const Card = ({ marker, src }: { marker: any; src: string }) => {
  return (
    <div className="flex flex-col w-full h-full bg-white border-darkBeige-1 rounded-2xl p-6 gap-6 overflow-auto text-black">
      <strong className="text-2xl font-gMedium">{marker.title}</strong>
      <img src={`${src}`} alt={`${marker.title}`} className="self-center w-32 h-32 rounded-2xl" />

      <div className="flex flex-col gap-6">
        <p>주소: {marker.addr}</p>
        <p>전화번호: {marker.tel_no}</p>
        <p>운영시간: {marker.operating_time}</p>
        <p>가격: {marker.entr_fee}</p>
        <p className="break-words whitespace-normal">
          홈페이지:{' '}
          <a href={marker.url} className="text-xs text-realBlue">
            {marker.url}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
