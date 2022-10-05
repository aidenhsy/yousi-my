import axios from "axios";

export default function EquipPage({ storeId, equipNo }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://open.feishu.cn/anycross/trigger/callback/Y2U2MGNjODJjMGZiYTMxNzlkODYwODZiODZmYjIwYzk=",
      { equipNo: equipNo, storeId: storeId }
    );
    console.log(`${storeId} and ${equipNo}`);
    console.log(res);
  };

  return (
    <div>
      <h1>
        storeId: {storeId}, equipNo: {equipNo}
      </h1>
      <form onSubmit={handleSubmit} id="form1">
        <button type="submit" form="form1">
          Submit
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query);
  return {
    props: { storeId: query.storeId, equipNo: query.slug },
  };
}
