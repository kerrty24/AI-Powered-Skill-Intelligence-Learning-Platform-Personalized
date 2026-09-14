# PROJECT IMPLEMENTATION & EVALUATION PROTOCOL
## SMART INDIA HACKATHON (SIH) 2026 — SOFTWARE CATEGORY

---

### DOCUMENT CONTROL & METADATA

| Parameter | Specification Details |
| :--- | :--- |
| **Project Title** | AI-Powered Skill Intelligence Learning Platform & Personalized Learning Paths |
| **Problem Statement ID** | **SIH26101** |
| **Theme** | Smart Education & Capacity Building |
| **Category** | Software |
| **Team Name** | **ALTRIX** |
| **Platform Target** | Mission Karmayogi / iGOT Karmayogi / Public Service Capacity Building |
| **Protocol Version** | 1.0 (Scrutiny & Review Ready) |
| **Status** | Active — Official Project Protocol |

---

## 1. PROTOCOL OBJECTIVE & SCOPE

### 1.1 Objective
To establish a standardized, end-to-end technical and operational protocol for an AI-powered skill intelligence platform. The system objectively benchmarks learner/official competencies, diagnoses skill gaps against targeted role profiles (FRAC framework), serves hyper-personalized learning journeys, and continuously re-indexes proficiency via adaptive evaluation.

### 1.2 Operational Scope
* **Target Users:** Public sector officials, institutional learners, department supervisors, and human resource/training managers.
* **Functional Boundaries:** Automated role competency profiling, automated assessment generation (RAG-backed), personalized learning path synthesis, and dynamic progress verification.
* **Compliance:** Data privacy adherence, zero hallucination guardrails on learning content, and role-based access control.

---

## 2. STANDARD OPERATING PROCEDURE (SOP) / WORKFLOW PROTOCOL

The system executes through a continuous 6-stage closed-loop protocol:

```
[Stage 1: Role Ingestion] 
       │
       ▼
[Stage 2: Baseline Diagnostic Assessment] 
       │
       ▼
[Stage 3: AI Skill-Gap Analysis & Matrix Generation] 
       │
       ▼
[Stage 4: Personalized Learning Path Synthesis (RAG + iGOT)] 
       │
       ▼
[Stage 5: Adaptive Real-Time Evaluation & Practical Quizzes] 
       │
       ▼
[Stage 6: Dynamic Competency Score Update & Feedback Loop]
       │
       └───────► (Re-engages Stage 3 for Continuous Upskilling)
```

### Stage 1: Role & Competency Framework Ingestion
* Ingests role definitions based on the **FRAC** (Framework for Roles, Activities, and Competencies) guidelines.
* Maps mandatory technical competencies, managerial acumen, and domain knowledge required for specific designation tiers.

### Stage 2: Baseline Diagnostic Assessment Protocol
* Learner undergoes an initial multi-modal diagnostic screening:
  * Multiple Choice Conceptual Questions (Knowledge validation)
  * Scenario-based situational inquiries (Practical reasoning)
  * Real-time conversational / interaction responses (Communication & problem solving)
* Measures baseline proficiency index across target competency vectors ($0 - 100\%$).

### Stage 3: Skill-Gap Diagnostic Protocol
* Computes the difference between required competency thresholds ($C_{req}$) and current learner competency ($C_{curr}$):
  $$\Delta C = C_{req} - C_{curr}$$
* Generates a ranked skill deficiency matrix prioritizing mission-critical competencies.

### Stage 4: Personalized Curriculum Synthesis Protocol
* Queries verified repository knowledge bases (e.g., iGOT Karmayogi course catalogue).
* Uses vector semantic search (`pgvector`) to retrieve precise bite-sized learning modules matching each gap.
* Constructs a personalized timeline and modular learning trajectory.

### Stage 5: In-Situ Adaptive Evaluation Protocol
* As the learner consumes course modules, dynamic evaluation agents generate contextual quizzes directly grounded in the module text using Retrieval-Augmented Generation (RAG).
* Difficulty level scales dynamically using **Computerized Adaptive Testing (CAT)** principles:
  * Correct response $\rightarrow$ increments difficulty and depth of next question.
  * Incorrect response $\rightarrow$ generates diagnostic breakdown and recommends targeted micro-remedies.

### Stage 6: Competency Updating & Milestone Certification Protocol
* Recalculates official competency scores upon successful module completion.
* Issues cryptographically verifiable skill badges and notifies department heads of enhanced qualification readiness.

---

## 3. TECHNICAL ARCHITECTURE & DATA COMMUNICATION PROTOCOL

```
┌─────────────────────────────────────────────────────────────┐
│                   PRESENTATION TIER (UI)                   │
│   React.js 18 + Tailwind CSS + Chart.js / D3.js Dashboards  │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTPS / WSS / REST APIs
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                 APPLICATION & API GATEWAY                   │
│         Java Spring Boot 3.x (Security, JWT, RBAC)          │
└──────────────┬──────────────────────────────┬───────────────┘
               │                              │
               ▼                              ▼
┌──────────────────────────────┐ ┌─────────────────────────────┐
│        AI INFERENCE ENGINE   │ │       DATA PERSISTENCE      │
│   FastAPI (Python 3.11)      │ │   PostgreSQL 16 (Relational)│
│   • LangChain / LlamaIndex   │ │   • pgvector (Embeddings)   │
│   • Quantized LLM (Mistral/  │ │   • Redis (Cache & Session) │
│     Llama-3-8B-Instruct)     │ └─────────────────────────────┘
│   • Guardrails AI Engine     │
└──────────────────────────────┘
```

### 3.1 Network & Communication Protocols
* **Client-to-Backend:** RESTful JSON over HTTPS (TLS 1.3) for transactional queries; WebSockets (WSS) for real-time live assessment feedback.
* **Authentication Protocol:** Stateless JSON Web Token (JWT) with HMAC-SHA256 signature and 15-minute rotation tokens.
* **Inter-Service Communication:** Asynchronous HTTP/2 microservice communication between Spring Boot gateway and Python FastAPI AI microservice.

### 3.2 AI & RAG Inference Protocol
* **Embedding Model:** `text-embedding-3-small` or `all-MiniLM-L6-v2` (384-dimensional vector space).
* **Chunking Strategy:** 500-token sliding windows with 50-token overlaps to preserve semantic continuity.
* **Vector Indexing:** HNSW (Hierarchical Navigable Small World) index in `pgvector` for $< 25\text{ ms}$ retrieval latency.
* **Hallucination Prevention Protocol:** Grounded QA prompt templates where the LLM is explicitly penalized for generating claims not found in retrieved course chunks.

---

## 4. EVALUATION RUBRIC & SCORING MATHEMATICAL MODEL

The learner's Composite Competency Score ($S_{comp}$) is calculated through an objective multi-variable formulation:

$$S_{comp} = \sum_{i=1}^{n} w_i \cdot K_i + \alpha \cdot R_{scenario} + \beta \cdot A_{practical}$$

Where:
* $K_i$: Domain knowledge retention score for competency $i$ ($0 - 100$).
* $w_i$: Normalized weight factor of the specific competency ($\sum w_i = 1.0$).
* $R_{scenario}$: Situational judgment and reasoning score derived from case-study simulations ($0 - 100$).
* $A_{practical}$: Practical task completion and problem-solving index ($0 - 100$).
* $\alpha, \beta$: Calibration multipliers balancing theory against operational execution.

### Scoring Classification Matrix:
| Score Range | Proficiency Tier | Action Protocol |
| :--- | :--- | :--- |
| **85 – 100** | Expert / Deployment Ready | Role certification awarded; eligible for advanced specialization. |
| **70 – 84** | Proficient | Target gaps cleared; periodic refresher schedule set. |
| **50 – 69** | Developing | Mandatory supplementary learning modules deployed. |
| **Below 50** | Novice / Critical Gap | Remedial pathway initiated with supervisor alert. |

---

## 5. QUALITY ASSURANCE, RISK & MITIGATION PROTOCOL

| Risk Category | Identified Hazard | Protocol Mitigation Mechanism |
| :--- | :--- | :--- |
| **AI Reliability** | Hallucinated or erroneous quiz questions | Retrieval strictly bounded to verified official PDFs; strict JSON-schema enforcement with regex parsing. |
| **Data Privacy** | Exposure of government officer records | Zero external training on personal records; encryption at rest (AES-256) and in transit (TLS 1.3). |
| **Scalability** | High concurrency during mass evaluation cycles | Microservice decoupled architecture with Redis caching and asynchronous message queueing. |
| **User Bias** | Skewed question difficulty | Continuous difficulty calibration via automated item response theory (IRT). |

---

## 6. SPRINT IMPLEMENTATION PROTOCOL & MILESTONES

```
Week 1 - 2: Architecture Setup & Database Schema Initialization
             ├── Spring Boot Auth & Role-Based Access Setup
             └── PostgreSQL + pgvector Ingestion of Course Syllabus

Week 3 - 4: Core AI Engine & RAG Retrieval Pipeline
             ├── FastAPI Microservice & Vector Embeddings
             └── Grounded Quiz Generation Engine with Strict Rubrics

Week 5 - 6: Frontend Integration & Interactive Learner Dashboard
             ├── React.js Learner Portal & Diagnostic Quiz UI
             └── Real-Time Competency Visualizations (Radar/Bar charts)

Week 7 - 8: End-to-End Testing, Security Audits & Pilot Simulation
             ├── Load Testing (500+ Concurrent Learners)
             └── Deployment on Cloud/Local Staging for Live Demonstration
```

---

## 7. SIGN-OFF & SCRUTINY COMMITTEE VERIFICATION

| Verification Role | Name / Designation | Status | Signature & Date |
| :--- | :--- | :--- | :--- |
| **Team Lead** | ALTRIX Team Representative | Submitted | _______________ |
| **Faculty Mentor** | Project Supervisor / Guide | Reviewed | _______________ |
| **Scrutiny Evaluator** | SIH Institutional Coordinator | Verified | _______________ |
