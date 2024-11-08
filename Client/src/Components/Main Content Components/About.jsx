import "./about.css"

export default function About(){
    return <div className="greet">
      <div className="summary">
        <h2>About Us: CareNest - The Healthcare Community Platform</h2>
        <p>
          <strong>Description:</strong> CareNest is a digital healthcare platform with a single-page interface that
          simplifies health management. It includes essential tools like a BMI calculator, TaskBoard, medication
          reminders, a secure password vault, and an AI Health Assistant knowledgeable in over 9,000 medicines. With a
          focus on ease of use and security, CareNest provides a convenient way for users to manage their health.
        </p>

        <h2>Features:</h2>
        <ol>
          <li>
            <strong>Dr. Chloe:</strong> Say hello to Dr. Chloe, your cheerful AI companion and health expert! She knows
            over 9,000 medications and is always ready to help. Whether you need advice on a stubborn cough or a
            tricky health choice, Dr. Chloe is here to support your wellness journey with a smile.
          </li>
          <li>
            <strong>BMI Calculator:</strong> Enables users to monitor and calculate their Body Mass Index, supporting
            physical health awareness and fitness tracking.
          </li>
          <li>
            <strong>Daily Medication Reminder:</strong> Assists users in staying consistent with their medication
            routines, supporting better health management.
          </li>
          <li>
            <strong>Encrypted Password Vault:</strong> A secure, encrypted storage solution for sensitive passwords,
            reducing the need to remember multiple account details.
          </li>
          <li>
            <strong>Task Board:</strong> Allows users to store and organize tasks with descriptions and deadlines,
            helping them stay on top of important activities.
          </li>
          <li>
            <strong>User-Friendly Design:</strong> With an intuitive, single-page interface, CareNest is accessible for
            elderly users and busy individuals alike, offering a smooth and modern experience.
          </li>
        </ol>
        <div className="pros-cons">
          <h2>Key Benefits:</h2>
          <ol>
            <li>
              <strong>Comprehensive Health Tools:</strong> Covers various health needs, from physical tracking to
              medication management.
            </li>
            <li>
              <strong>High Security:</strong> The encrypted vault securely stores sensitive information, prioritizing
              privacy.
            </li>
            <li>
              <strong>AI Assistance:</strong> The health assistant provides prompt, reliable answers, minimizing the
              need for extensive research on medical queries.
            </li>
            <li>
              <strong>Ease of Use:</strong> The intuitive design makes it easy for users of all ages to navigate.
            </li>
            <li>
              <strong>Time Management:</strong> The task board and reminders support effective organization of
              time-sensitive activities.
            </li>
          </ol>
        </div>

        
      </div>
    </div>
}