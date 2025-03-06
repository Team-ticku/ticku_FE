import VolumeInfo from "../../components/information/VolumeInfo";
import CompanyInfo from "../../components/information/CompanyInfo";
import VolumeTable from "../../components/information/VolumeTable";

function VolumePage({ chartData, volumeData }) {
  return (
    <div>
      <CompanyInfo
        logo={chartData.logo}
        altText={chartData.altText}
        name={chartData.name}
        code={chartData.code}
        price={chartData.price}
        change={chartData.change}
      />
      <VolumeInfo title="거래량"></VolumeInfo>
      <VolumeTable data={volumeData} />
    </div>
  );
}

export default VolumePage;
