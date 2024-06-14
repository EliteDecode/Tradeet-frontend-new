import React from 'react'

const CampaignGoals = () => {
  return (
    <div>
      <h2 className="lg:text-2xl text-lg text-[#12362A] font-semibold">Campaign Goals</h2>
      <h4 className='text-sm font-medium mt-3'>
        Our Goals to Provide Quality Education for Children Living in Slums.{" "}
      </h4>
      <ul className='mt-3'>
        <li className="list-disc text-[12px]">
          Ensure every child living in a slum has access to quality education,
          irrespective of their
        </li>
        <li className="list-disc text-[12px]">
          Build and improve school infrastructure in slum areas to create
          conducive learning environments.
        </li>
        <li className="list-disc text-[12px]">
          Foster community involvement and support to encourage parents and
          caregivers to prioritize their
        </li>
        <li className="list-disc text-[12px]">
          Implement programs that focus not only on academic education but also
          on holistic development
        </li>
      </ul>
    </div>
  );
}

export default CampaignGoals
