async function api(url, options = {}) {
    const response = await fetch(url, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Request failed");
    }

    return response.status === 204 ? null : response.json();
}


// ==================== LOAD ALL DATA ====================

async function load() {
    try {
        const [patients, doctors, appointments] = await Promise.all([
            api("/api/patients"),
            api("/api/doctors"),
            api("/api/appointments")
        ]);

        // Dashboard counts
        document.querySelector("#patients").textContent = patients.length;
        document.querySelector("#doctors").textContent = doctors.length;
        document.querySelector("#appointments").textContent = appointments.length;

        // Patient table
        document.querySelector("#patientRows").innerHTML =
            patients.map(patient => `
                <tr>
                    <td>${patient.id}</td>
                    <td>${patient.name}</td>
                    <td>${patient.age}</td>
                    <td>${patient.gender}</td>
                    <td>${patient.phone}</td>
                    <td>
                        <button onclick="removePatient(${patient.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `).join("");

        // Doctor table
        document.querySelector("#doctorRows").innerHTML =
            doctors.map(doctor => `
                <tr>
                    <td>${doctor.id}</td>
                    <td>${doctor.name}</td>
                    <td>${doctor.specialization}</td>
                    <td>${doctor.phone || ""}</td>
                    <td>${doctor.email || ""}</td>
                    <td>
                        <button onclick="removeDoctor(${doctor.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `).join("");

        // Patient dropdown
        const patientSelect = document.querySelector("#appointmentPatient");

        patientSelect.innerHTML =
            '<option value="">Select Patient</option>' +
            patients.map(patient => `
                <option value="${patient.id}">
                    ${patient.name} (ID: ${patient.id})
                </option>
            `).join("");

        // Doctor dropdown
        const doctorSelect = document.querySelector("#appointmentDoctor");

        doctorSelect.innerHTML =
            '<option value="">Select Doctor</option>' +
            doctors.map(doctor => `
                <option value="${doctor.id}">
                    ${doctor.name} - ${doctor.specialization}
                </option>
            `).join("");

        // Appointment table
        document.querySelector("#appointmentRows").innerHTML =
            appointments.map(appointment => `
                <tr>
                    <td>${appointment.id}</td>
                    <td>${appointment.patientId}</td>
                    <td>${appointment.doctorId}</td>
                    <td>${appointment.appointmentTime || ""}</td>
                    <td>${appointment.status || ""}</td>
                    <td>${appointment.reason || ""}</td>
                    <td>
                        <button onclick="removeAppointment(${appointment.id})">
                            Delete
                        </button>
                    </td>
                </tr>
            `).join("");

    } catch (error) {
        console.error("Load error:", error);
        alert("Unable to load data: " + error.message);
    }
}


// ==================== ADD PATIENT ====================

document.querySelector("#patientForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        const patient = {
            name: document.querySelector("#name").value.trim(),
            age: Number(document.querySelector("#age").value),
            gender: document.querySelector("#gender").value,
            phone: document.querySelector("#phone").value.trim(),
            email: document.querySelector("#email").value.trim(),
            bloodGroup: document.querySelector("#bloodGroup").value.trim()
        };

        await api("/api/patients", {
            method: "POST",
            body: JSON.stringify(patient)
        });

        alert("Patient added successfully!");

        event.target.reset();

        await load();

    } catch (error) {

        console.error("Add patient error:", error);

        alert("Failed to add patient: " + error.message);
    }
});


// ==================== DELETE PATIENT ====================

async function removePatient(id) {

    if (!confirm("Delete this patient?")) {
        return;
    }

    try {

        await api("/api/patients/" + id, {
            method: "DELETE"
        });

        alert("Patient deleted successfully!");

        await load();

    } catch (error) {

        console.error("Delete patient error:", error);

        alert("Failed to delete patient: " + error.message);
    }
}


// ==================== ADD DOCTOR ====================

document.querySelector("#doctorForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        const doctor = {
            name: document.querySelector("#doctorName").value.trim(),
            specialization: document.querySelector("#specialization").value.trim(),
            phone: document.querySelector("#doctorPhone").value.trim(),
            email: document.querySelector("#doctorEmail").value.trim()
        };

        await api("/api/doctors", {
            method: "POST",
            body: JSON.stringify(doctor)
        });

        alert("Doctor added successfully!");

        event.target.reset();

        await load();

    } catch (error) {

        console.error("Add doctor error:", error);

        alert("Failed to add doctor: " + error.message);
    }
});


// ==================== DELETE DOCTOR ====================

async function removeDoctor(id) {

    if (!confirm("Delete this doctor?")) {
        return;
    }

    try {

        await api("/api/doctors/" + id, {
            method: "DELETE"
        });

        alert("Doctor deleted successfully!");

        await load();

    } catch (error) {

        console.error("Delete doctor error:", error);

        alert("Failed to delete doctor: " + error.message);
    }
}


// ==================== CREATE APPOINTMENT ====================

document.querySelector("#appointmentForm").addEventListener("submit", async function(event) {

    event.preventDefault();

    try {

        const appointment = {
            patientId: Number(
                document.querySelector("#appointmentPatient").value
            ),

            doctorId: Number(
                document.querySelector("#appointmentDoctor").value
            ),

            appointmentTime:
                document.querySelector("#appointmentTime").value,

            status:
                document.querySelector("#status").value,

            reason:
                document.querySelector("#reason").value.trim()
        };

        await api("/api/appointments", {
            method: "POST",
            body: JSON.stringify(appointment)
        });

        alert("Appointment created successfully!");

        event.target.reset();

        await load();

    } catch (error) {

        console.error("Create appointment error:", error);

        alert("Failed to create appointment: " + error.message);
    }
});


// ==================== DELETE APPOINTMENT ====================

async function removeAppointment(id) {

    if (!confirm("Delete this appointment?")) {
        return;
    }

    try {

        await api("/api/appointments/" + id, {
            method: "DELETE"
        });

        alert("Appointment deleted successfully!");

        await load();

    } catch (error) {

        console.error("Delete appointment error:", error);

        alert("Failed to delete appointment: " + error.message);
    }
}


// ==================== START APPLICATION ====================

load();