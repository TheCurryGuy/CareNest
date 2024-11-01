import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "./medi.css"

const MediReminder = () => {
    // State for medications and input values
    const [medications, setMedications] = useState(() => {
        const savedMedications = localStorage.getItem('medications');
        return savedMedications ? JSON.parse(savedMedications) : []; // Return parsed data or an empty array
    });
    const [medicineName, setMedicineName] = useState('');
    const [usedFor, setUsedFor] = useState('');
    const [priority, setPriority] = useState('medium');
    let draggableMedication = null;

    // Update localStorage whenever medications change
    useEffect(() => {
        localStorage.setItem('medications', JSON.stringify(medications)); // Store updated medications in localStorage
    }, [medications]); // Run every time 'medications' changes

    const addItem = (e) => {
        e.preventDefault();
        if (medicineName.trim() && usedFor.trim()) {
            const newMedication = {
                id: Date.now(),
                name: medicineName,
                usedFor,
                priority,
                status: 'required' // Default status
            };
            setMedications((prevMedications) => [...prevMedications, newMedication]); // Update medications state
            setMedicineName(''); // Clear medicine name input
            setUsedFor(''); // Clear used for input
            setPriority('medium'); // Reset priority to default
        }
    };

    const handleDragStart = (medication) => {
        draggableMedication = medication;
    };

    const handleDrop = (newStatus) => {
        if (draggableMedication) {
            const updatedMedications = medications.map(medication =>
                medication.id === draggableMedication.id ? { ...medication, status: newStatus } : medication
            );
            setMedications(updatedMedications); // Update state with new status
            draggableMedication = null; // Clear the draggable medication
        }
    };

    const handleDelete = (id) => {
        const updatedMedications = medications.filter(medication => medication.id !== id); // Filter out deleted medication
        setMedications(updatedMedications); // Update state
    };

    const filterMedicationsByStatus = (status) => {
        return medications.filter(medication => medication.status === status);
    };

    return (
        <div className="medication-app">
            <div className="input-container">
                <div className="add-medication-section">
                    <label htmlFor="medication-name">Medicine Name:</label>
                    <input
                        type="text"
                        id="medication-name"
                        className="input"
                        value={medicineName}
                        onChange={(e) => setMedicineName(e.target.value)}
                        placeholder="Add a new medicine"
                    />
                    <label htmlFor="medication-used-for">Used For:</label>
                    <input
                        type="text"
                        id="medication-used-for"
                        className="input"
                        value={usedFor}
                        onChange={(e) => setUsedFor(e.target.value)}
                        placeholder="Used for"
                    />
                    <label htmlFor="medication-priority">Priority:</label>
                    <select
                        id="medication-priority"
                        className="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <button className="submit" onClick={addItem}>
                    Add
                </button>
            </div>
            <div className="row mt-5">
                <MedicationColumn title="Required to take" medications={filterMedicationsByStatus('required')} onDragStart={handleDragStart} onDrop={() => handleDrop('required')} onDelete={handleDelete} />
                <MedicationColumn title="Have Taken" medications={filterMedicationsByStatus('taken')} onDragStart={handleDragStart} onDrop={() => handleDrop('taken')} onDelete={handleDelete} />
                <MedicationColumn title="Will Take" medications={filterMedicationsByStatus('willTake')} onDragStart={handleDragStart} onDrop={() => handleDrop('willTake')} onDelete={handleDelete} />
            </div>
        </div>
    );
};

const MedicationColumn = ({ title, medications = [], onDragStart, onDrop, onDelete }) => {
    return (
        <div className="box" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
            <h3 style={{ marginLeft: "20px" }}>{title}</h3>
            {medications.map((medication) => (
                <div
                    key={medication.id}
                    className="medication"
                    draggable
                    onDragStart={() => onDragStart(medication)}
                >
                    <p>Name: {medication.name}</p>
                    <p>Used For: {medication.usedFor}</p>
                    <p>Priority: {medication.priority}</p>
                    <FontAwesomeIcon icon={faTrash} className="trash" onClick={() => onDelete(medication.id)} />
                </div>
            ))}
        </div>
    );
};

export default MediReminder;
