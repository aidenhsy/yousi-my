import axios from 'axios';
import Image from 'next/image';
import img1 from '../../public/images/1.png';

export default function EquipPage({ query }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('hello');
    // const res = await axios.post(
    //   'https://open.feishu.cn/anycross/trigger/callback/Y2U2MGNjODJjMGZiYTMxNzlkODYwODZiODZmYjIwYzk=',
    //   { equipNo: query.slug, storeId: query.storeid }
    // );
  };
  console.log(query.storeid);
  return (
    <div>
      <div className="p-6 my-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
        <Image
          src={`http://ci.yousico.com/pictures/equipments/${query.equipNo}.jpg`}
          alt="equipment pic"
          width={1000}
          height={1000}
        />
        <div className="text-xl font-medium text-black">
          Equipment: {query.equipNo}
        </div>
        <p className="text-slate-500">UID: {query.slug}</p>
        <p className="text-slate-500">storeId: {query.storeId}</p>
      </div>
      <form id="submitForm" onSubmit={handleSubmit}>
        <button
          className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 flex flex-col rounded mx-auto items-center"
          type="submit"
        >
          维修
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await axios.post('https://open.yousico.com/api/equipments/info');
  console.log(res);
  return {
    props: { query },
  };
}
