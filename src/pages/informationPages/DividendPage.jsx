import VolumeInfo from "../../components/information/VolumeInfo";
import CompanyInfo from "../../components/information/CompanyInfo";
import VolumeTable from "../../components/information/VolumeTable";
import DividendTable from "../../components/information/DividendTable";

function DividendPage({ chartData, dividendData }) {
  return (
    <div>
      <CompanyInfo
        name={chartData.name}
        code={chartData.code}
        price={chartData.price}
        change={chartData.change}
      />
      <VolumeInfo title="배당"></VolumeInfo>
      <DividendTable data={dividendData} /> {/* data prop 전달 */}
    </div>
  );
}

export default DividendPage;
