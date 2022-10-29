import React from "react";

function CharitiesBeneficiaryList({
  allBeneficiaries,
  setTargetBeneficiary,
  setBeneficiaryName,
  setBeneficiaryLocation,
  setBeneficiaryDescription,
}) {
  return (
    <div>
      { allBeneficiaries?.map((dataObject) => (
        <div className="CMB-BeneficiaryItem"
          key={dataObject?.beneficiary?.id}
          onClick={() => {
            setTargetBeneficiary(dataObject?.beneficiary);
            setBeneficiaryName(dataObject?.beneficiary?.name);
            setBeneficiaryLocation(dataObject?.beneficiary?.location);
            setBeneficiaryDescription(dataObject?.beneficiary?.description);
          }}
        >
          {dataObject?.beneficiary?.name}
        </div>
      ))}
    </div>
  );
}
export default CharitiesBeneficiaryList;
