'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import inter from '../../components/images/interrupt.png'

const LLMAutonomousAgentsPage = () => {
  const [isTocVisible, setIsTocVisible] = useState(false)

  const toggleTocVisibility = () => {
    setIsTocVisible(!isTocVisible)
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-4">LLM Powered Autonomous Agents</h1>
      <p className="text-gray-600 text-sm mb-2">
        Date: Oct 10, 2024 | Author: 정세연
      </p>
      <div className="border-b border-gray-300 mb-6 bg-gray-100">
        <button
          className="text-left text-gray-700 py-2 w-full focus:outline-none"
          onClick={toggleTocVisibility}
        >
          {isTocVisible ? '▼' : '▶'} Table of Contents
        </button>
        {isTocVisible && (
          <ul className="list-disc list-inside ml-6 mt-2">
            <li>
              <a href="#research-areas" className="hover:underline">
                Research Areas
              </a>
              <ul className="list-[circle] list-inside ml-6">
                <li>
                  <a href="#research-1" className="hover:underline">
                    Efficient Interrupt System
                  </a>
                </li>
                <li>
                  <a href="#research-2" className="hover:underline">
                    Task Prioritization in Multi-Agent Systems using Priority
                    Queues
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        )}
      </div>
      <p className="text-gray-800 mb-6">
        Building agents with LLM (large language model) as its core controller
        is a cool concept. Several proof-of-concepts demos, such as{' '}
        <a
          href="https://github.com/Significant-Gravitas/Auto-GPT"
          className="hover:underline"
        >
          AutoGPT
        </a>
        ,{' '}
        <a
          href="https://github.com/AntonOsika/gpt-engineer"
          className="hover:underline"
        >
          GPT-Engineer
        </a>
        , and{' '}
        <a
          href="https://github.com/yoheinakajima/babyagi"
          className="hover:underline"
        >
          BabyAGI
        </a>
        , serve as inspiring examples. The potentiality of LLM extends beyond
        generating well-written copies, stories, essays, and programs; it can be
        framed as a powerful general problem solver.
      </p>

      <h2 id="research-areas" className="text-2xl font-semibold mb-4">
        Research Areas
      </h2>
      <h3
        id="research-1"
        className="text-xl font-semibold mb-2 bg-yellow-200 inline-block"
      >
        &quot;Efficient Interrupt Handling System for Multi-Agent Graphs&quot;
      </h3>
      <p className="text-gray-800 mb-6">
        This research proposal introduces an Interrupt Handling System inspired
        by systems in computer architecture, but applied within a multi-agent
        graph-based framework. The focus is on efficiently managing agent
        behaviors and actions, particularly when unexpected interruptions occur.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Graph-based Decision-Making</strong>
          <p className="text-gray-800 ml-4">
            The system is designed to manage agents’ plans by deciding which
            agent should perform which action based on the current state of a
            graph. This is achieved using a graph format that tracks the agent’s
            state and action transitions, likely akin to state machines or
            decision trees.
          </p>
        </li>
        <br></br>
        <li>
          <strong>Interrupt Handling</strong>
          <p className="text-gray-800 ml-4">
            The possibility of <b>interrupts</b> arising due to incorrect input
            or computational errors is emphasized. To address this, the system
            needs an efficient <b>Interrupt Handling Method</b> to ensure agents
            can continue their tasks or replan efficiently when disruptions
            occur.
          </p>
        </li>
        <br></br>
        <li>
          <strong>
            Interaction between Large Language Models (LLMs) and Tools
          </strong>
          <p className="text-gray-800 ml-4">
            The work also considers cases where multiple tools or LLMs interact
            within the same framework. This complex interaction could lead to
            further challenges where interrupts may affect the agents’
            operations. Handling is crucial to prevent cascading errors or
            inefficiencies.
          </p>
        </li>
        <br></br>
        <li>
          <strong>Expected Contribution </strong>
          <br></br>
          <p className="text-gray-800 ml-4">
            The research aims to develop methods to minimize the negative
            effects of interrupts within agent systems, particularly in
            scenarios involving complex multi-agent interactions. By doing so,
            it would make significant contributions to fields involving LLMs and
            multi-agent systems, ensuring that these systems function more
            robustly even in the face of interruptions.
          </p>
          <br></br>
          <p className="text-gray-800 ml-4">
            The diagram shows the flow of an agent within a graph, starting with
            the agent’s initial state, continuing with actions, and possibly
            ending the task. However, along this path, an interrupt is
            triggered, leading the system to temporarily pause or replan the
            agent’s tasks. The interrupt process appears to involve steps like
            state storage (saving necessary context before an interrupt),
            handling the interrupt, and then resuming or redirecting the agent’s
            actions once the interrupt is resolved
          </p>
          <br></br>
          <p className="text-gray-800 ml-4">
            Overall, the project explores a novel aspect of multi-agent
            frameworks, focusing on the intersection between{' '}
            <b>error handling</b> and <b>interrupt management</b> to maintain
            efficiency and accuracy in dynamic environments involving
            agent-based systems.
          </p>
        </li>

        <div className="my-8">
          <div className="flex justify-center">
            <Image
              src="/images/interrupt.PNG"
              alt="Diagram of Flow of Agent"
              width={800} // 원하는 이미지 크기로 설정
              height={600}
            />
          </div>
          <p className="text-center text-gray-700 mt-4">
            Figure 1. Diagram of Flow of Agent
          </p>

          <div className="text-center">
            <a
              href="https://normalstory.tistory.com/entry/LangGraph-2-유형별-실습?category=977072"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-gray-700 mt-4 text-xs"
            >
              https://normalstory.tistory.com/entry/LangGraph-2-유형별-실습?category=977072
            </a>
          </div>
          <div className="text-center">
            <a
              href="https://nice-engineer.tistory.com/entry/운영체제-인터럽트Interrupt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 mt-4 text-xs"
            >
              https://nice-engineer.tistory.com/entry/운영체제-인터럽트Interrupt
            </a>
          </div>
        </div>
      </ul>

      {/* 두번째 문단 */}
      <h3
        id="research-2"
        className="text-xl font-semibold mb-2 bg-yellow-200 inline-block"
      >
        &quot;Task Prioritization in Multi-Agent Systems using Priority
        Queues&quot;
      </h3>
      <p className="text-gray-800 mb-6">
        In this sector of research, we focus on task prioritization and
        coordination in multi-agent systems using priority queues. The concept
        extends the scope of agent-based systems by adding a layer of
        intelligent prioritization to handle complex, multi-agent
        collaborations. In multi-agent systems, especially in frameworks like{' '}
        <b>AutoGen</b>, multiple agents must work in unison to perform various
        tasks. These tasks are often dependent on efficient coordination and
        synchronization between agents. Without a systematic approach to task
        prioritization, agents can be bogged down by conflicts, inefficient task
        execution, or bottlenecks.
      </p>

      <br></br>
      <p>
        <strong>The Problem:Task Coordination Challenges</strong>
      </p>
      <p>
        When agents work together, there are several challenges that need to be
        addressd:
      </p>
      <br></br>

      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Ambiguity in Task Priority</strong>
          <p className="text-gray-800 ml-4">
            Agents may have different interpretations of which tasks should be
            prioritized, leading to potential misalignment and inefficiencies.
          </p>
        </li>
        <br></br>
        <li>
          <strong>Dynamic Reprioritization </strong>
          <p className="text-gray-800 ml-4">
            The system needs to adjust the task priorities dynamically as new
            tasks enter the system or the environment changes.
          </p>
        </li>
        <br></br>
        <li>
          <strong>Synchronization </strong>
          <p className="text-gray-800 ml-4">
            Even when priorities are clear, the agents need a way to coordinate
            their efforts and ensure that higher-priority tasks are completed
            before lower-priority ones.
          </p>
        </li>
        <br></br>
        <p>
          To address these challenges, the research proposes the use of{' '}
          <b>priority queues</b>, a fundamental data structure used to manage
          and order tasks based on their priority levels.
        </p>
        <br></br>

        <p>
          <strong>
            The Solution: Priority Queues for Agent Task Management
          </strong>
        </p>
        <br></br>
        <p>
          The concept of a priority queue enables agents to efficiently manage
          their tasks by dynamically assigning and reordering tasks based on
          their importance. Priority queues allow agents to add new tasks and
          adjust existing ones based on predefined criteria. This method ensures
          that tasks with the highest priority are executed first, while others
          wait in the queue for their turn.
        </p>

        <div className="my-8">
          <div className="flex justify-center">
            <Image
              src="/images/queue.PNG"
              alt="queue"
              width={800} // 원하는 이미지 크기로 설정
              height={600}
            />
          </div>
          <p className="text-center text-gray-700 mt-4">
            Figure 2. Diagram of Priority Queues
          </p>
        </div>
        <p>
          Fig. 2 illustrates this process using a tree-based priority queue
          structure. Here’s a breakdown of the steps involved:
        </p>
        <br></br>
        <p id="steps" className="text-xl font-semibold mb-2">
          Process Steps
        </p>
        <ol className="list-decimal list-inside mb-6 ml-6">
          <li className="mb-4">
            <strong>Step 1:</strong> The system begins with a standard task
            hierarchy where each node represents a task, with its position in
            the tree indicating its current priority level.
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                Tasks like &quot;5,&quot; &quot;7,&quot; &quot;8,&quot; and
                &quot;13&quot; occupy various positions in the hierarchy based
                on their urgency or relevance.
              </li>
              <li>
                A new task (&quot;25&quot;) is introduced, requiring the system
                to re-evaluate the task priority.
              </li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Step 2:</strong> The new task (&quot;25&quot;) is inserted
            into the queue, triggering a reordering process. This reordering
            ensures that the highest priority tasks always rise to the top.
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                The system checks whether the newly added task has a higher
                priority than the current task at the root (e.g., task
                &quot;20&quot;).
              </li>
              <li>Based on this comparison, tasks are swapped accordingly.</li>
            </ul>
          </li>
          <li className="mb-4">
            <strong>Step 3:</strong> The priority queue adjusts the positions of
            the tasks. In this case, task &quot;25&quot; has the highest
            priority and moves to the top of the queue, while tasks
            &quot;20,&quot; &quot;15,&quot; &quot;13,&quot; and others are
            re-ordered accordingly.
            <ul className="list-disc list-inside ml-6 mt-2">
              <li>
                The final step reflects the new state of the priority queue,
                where the task with the highest priority is now at the root of
                the tree.
              </li>
            </ul>
          </li>
        </ol>

        <p>
          This dynamic task reordering ensures that agents always work on the
          most critical tasks first, allowing for more efficient task management
          in complex systems.
        </p>
        <br></br>

        <p>
          <strong>Use Case: AutoGen Multi-Agent Systems</strong>
        </p>
        <p>
          This task prioritization system is especially valuable in environments
          like AutoGen, where multiple agents work together to achieve common
          goals. In such systems:
        </p>
        <br></br>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Task synchronization and coordination</strong>between agents
            is critical, as tasks are often interdependent.
          </li>
          <li>
            By implementing <b>riority queues</b>, AutoGen systems can manage
            tasks in real-time, adjusting priorities as new tasks arise or
            existing tasks are modified.
          </li>
        </ul>

        <p>
          For example, consider a scenario where agents are tasked with
          processing vast amounts of data for an LLM application. As different
          components of the data become available, the system can prioritize
          which data chunks are most important to process first, ensuring that
          critical parts are processed in a timely manner.
        </p>
        <br></br>
        <p>
          <strong>Expceted Contributions</strong>
        </p>
        <br></br>
        <p>
          The research is expected to make significant contributions to the
          field of multi-agent systems by providing a robust framework for task
          prioritization:
        </p>
        <br></br>

        <ul className="list-disc list-inside mb-6">
          <li>
            It enables <b>dynamic coordination</b> in complex environments where
            task priorities shift rapidly.
          </li>
          <li>
            The priority queue-based approach ensures that even in systems with
            a high degree of task complexity, agents can effectively manage and
            complete the most critical tasks.
          </li>
          <li>
            This system can be extended to various real-world applications, from
            managing computational resources in cloud environments to
            coordinating LLMs in complex generative AI tasks.
          </li>
        </ul>
        <br></br>

        <p>
          This research is particularly timely, as multi-agent systems are
          becoming more prevalent in advanced AI systems. As such, developing
          efficient methods for task prioritization and coordination will be key
          to ensuring the scalability and effectiveness of these systems.
        </p>
        <br></br>

        <p>
          <strong>Key Paper Reference</strong>
        </p>
        <p>
          The research is grounded in the work of <b>Wu, Q. et al. (2023)</b>,
          which discusses the AutoGen framework and its applications in LLM
          systems. The paper titled “AutoGen: Enabling Next-Gen LLM Applications
          via Multi-Agent Conversation” is a key resource for understanding how
          multi-agent systems can be applied to cutting-edge AI technologies,
          and it forms the basis for much of the current research on task
          prioritization in agent-based systems.
        </p>
        <br></br>
        <p>
          This research proposes an innovative solution to task prioritization
          in multi-agent systems, laying the groundwork for more efficient and
          scalable AI-driven workflows. Through the use of priority queues,
          agents can dynamically adjust their task execution strategies to
          ensure optimal performance, even in complex, rapidly changing
          environments.
        </p>
      </ul>
    </div>
  )
}

export default LLMAutonomousAgentsPage
