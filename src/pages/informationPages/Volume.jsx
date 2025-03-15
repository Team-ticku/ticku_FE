import VolumeInfo from "../../components/information/VolumeInfo";
import VolumeTable from "../../components/information/VolumeTable";

function VolumePage({ volumeData }) {
  return (
    <div>
      <VolumeInfo title="거래량"></VolumeInfo>
      <VolumeTable data={volumeData} />
    </div>
  );
}

export default VolumePage;
