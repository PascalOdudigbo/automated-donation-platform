import React from "react";

function CharitiesBeneficiaryList({
  allBeneficiaries,
  setTargetBeneficiary,
  setBeneficiaryName,
  setBeneficiaryLocation,
  setBeneficiaryDescription,
}) {
  //console.log("ALL BENEFICIARIES:", allBeneficiaries)
  return (
    <div className="CMB-BeneficiaryItem">
      {allBeneficiaries?.map((dataObject) => (
        <div
          key={dataObject?.beneficiary?.id}
          onClick={() => {
            setTargetBeneficiary(dataObject?.beneficiary);
            setBeneficiaryName(dataObject?.beneficiary?.name);
            setBeneficiaryLocation(dataObject?.beneficiary?.location);
            setBeneficiaryDescription(dataObject?.beneficiary?.description);

            //console.log("TARGET BENEFICIARY:", dataObject?.beneficiary)
          }}
        >
          {dataObject?.beneficiary?.name}
        </div>
      ))}
    </div>
  );
}
export default CharitiesBeneficiaryList;