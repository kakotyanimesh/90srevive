'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function Home() {
    return (
        <div className="bg-lime-500 text-purple-800 font-impact p-8">
            <h1 className="text-7xl text-center underline">Neural Networks: Zero to Hero</h1>
            <p className="text-xl text-center">A course by Andrej Karpathy</p>
            <p className="text-lg">We start with the basics of backpropagation and build up to modern deep neural networks, like GPT. In my opinion language models are an excellent place to learn deep learning, even if your intention is to eventually go to other areas like computer vision because most of what you learn will be immediately transferable. This is why we dive into and focus on languade models.</p>
            <p className="text-lg">Prerequisites: solid programming (Python), intro-level math (e.g. derivative, gaussian).</p>
            <p className="text-lg">Learning is easier with others, come say hi in our Discord channel:</p>
            <div className="text-center">
                <a href="https://discord.gg/3zy8kqD9Cp">
                    {/* <Image src="https://dcbadge.vercel.app/api/server/3zy8kqD9Cp" alt="Discord" width={300} height={100} /> */}
                </a>
            </div>
            <h2 className="text-5xl text-center mt-8 underline">Syllabus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">2h25m</h3>
                    <a href="https://youtu.be/VMj-3S1tku0" className="text-blue-700 font-bold">The spelled-out intro to neural networks and backpropagation: building micrograd</a>
                    <p>This is the most step-by-step spelled-out explanation of backpropagation and training of neural networks. It only assumes basic knowledge of Python and a vague recollection of calculus from high school.</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">1h57m</h3>
                    <a href="https://youtu.be/PaCmpygFfXo" className="text-blue-700 font-bold">The spelled-out intro to language modeling: building makemore</a>
                    <p>We implement a bigram character-level language model, which we will further complexify in followup videos into a modern Transformer language model, like GPT. In this video, the focus is on (1) introducing torch.Tensor and its subtleties and use in efficiently evaluating neural networks and (2) the overall framework of language modeling that includes model training, sampling, and the evaluation of a loss (e.g. the negative log likelihood for classification).</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">1h15m</h3>
                    <a href="https://youtu.be/TCH_1BHY58I" className="text-blue-700 font-bold">Building makemore Part 2: MLP</a>
                    <p>We implement a multilayer perceptron (MLP) character-level language model. In this video we also introduce many basics of machine learning (e.g. model training, learning rate tuning, hyperparameters, evaluation, train/dev/test splits, under/overfitting, etc.).</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">1h55m</h3>
                    <a href="https://youtu.be/P6sfmUTpUmc" className="text-blue-700 font-bold">Building makemore Part 3: Activations & Gradients, BatchNorm</a>
                    <p>We dive into some of the internals of MLPs with multiple layers and scrutinize the statistics of the forward pass activations, backward pass gradients, and some of the pitfalls when they are improperly scaled. We also look at the typical diagnostic tools and visualizations you want to use to understand the health of your deep network. We learn why training deep neural nets can be fragile and introduce the first modern innovation that made doing so much easier: Batch Normalization. Residual connections and the Adam optimizer remain notable todos for later video.</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">1h55m</h3>
                    <a href="https://youtu.be/q8SA3rM6ckI" className="text-blue-700 font-bold">Building makemore Part 4: Becoming a Backprop Ninja</a>
                    <p>We take the 2-layer MLP (with BatchNorm) from the previous video and backpropagate through it manually without using PyTorch autograds loss.backward(): through the cross entropy loss, 2nd linear layer, tanh, batchnorm, 1st linear layer, and the embedding table. Along the way, we get a strong intuitive understanding about how gradients flow backwards through the compute graph and on the level of efficient Tensors, not just individual scalars like in micrograd. This helps build competence and intuition around how neural nets are optimized and sets you up to more confidently innovate on and debug modern neural networks.</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">56m</h3>
                    <a href="https://youtu.be/t3YJ5hKiMQ0" className="text-blue-700 font-bold">Building makemore Part 5: Building a WaveNet</a>
                    <p>We take the 2-layer MLP from previous video and make it deeper with a tree-like structure, arriving at a convolutional neural network architecture similar to the WaveNet (2016) from DeepMind. In the WaveNet paper, the same hierarchical architecture is implemented more efficiently using causal dilated convolutions (not yet covered). Along the way we get a better sense of torch.nn and what it is and how it works under the hood, and what a typical deep learning development process looks like (a lot of reading of documentation, keeping track of multidimensional tensor shapes, moving between jupyter notebooks and repository code, ...).</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">1h56m</h3>
                    <a href="https://www.youtube.com/watch?v=kCc8FmEb1nY" className="text-blue-700 font-bold">Lets build GPT: from scratch, in code, spelled out.</a>
                    <p>We build a Generatively Pretrained Transformer (GPT), following the paper Attention is All You Need and OpenAIs GPT-2 / GPT-3. We talk about connections to ChatGPT, which has taken the world by storm. We watch GitHub Copilot, itself a GPT, help us write a GPT (meta :D!) . I recommend people watch the earlier makemore videos to get comfortable with the autoregressive language modeling framework and basics of tensors and PyTorch nn, which we take for granted in this video.</p>
                </div>
                <div className="bg-yellow-300 p-4 rounded-lg">
                    <h3 className="text-2xl">2h13m</h3>
                    <a href="https://youtu.be/zduSFxRajkE" className="text-blue-700 font-bold">Lets build the GPT Tokenizer</a>
                    <p>The Tokenizer is a necessary and pervasive component of Large Language Models (LLMs), where it translates between strings and tokens (text chunks). Tokenizers are a completely separate stage of the LLM pipeline: they have their own training sets, training algorithms (Byte Pair Encoding), and after training implement two fundamental functions: encode() from strings to tokens, and decode() back from tokens to strings. In this lecture we build from scratch the Tokenizer used in the GPT series from OpenAI. In the process, we will see that a lot of weird behaviors and problems of LLMs actually trace back to tokenization. Well go through a number of these issues, discuss why tokenization is at fault, and why someone out there ideally finds a way to delete this stage entirely.</p>
                </div>
            </div>
            <p className="text-center mt-4 text-lg">ongoing...</p>
        </div>
    );
}
