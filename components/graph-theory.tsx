'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Filter, Grid, LayoutGrid, List, Menu, MonitorDot, Moon, Plus, Settings, Share2, Table } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from "next/image"
import Script from 'next/script'

export default function Component() {
  const handleContentEdit = (e: React.FormEvent<HTMLElement>) => {
    console.log('Content edited:', (e.target as HTMLElement).textContent);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      {/* Top Navigation */}
      <header className="border-b border-zinc-800">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <Menu className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <ArrowRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-1 text-sm text-zinc-400">
              <span>📓</span>
              <span>Notebook</span>
              <span>/</span>
              <span>🏷️</span>
              <span>Tags</span>
              <span>/</span>
              <span>Glaciology</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <Share2 className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <MonitorDot className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-zinc-50">
              <Moon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4">
        {/* Title Section */}
        <div className="mb-4 rounded-lg bg-emerald-900/30 p-4">
          <h1 className="text-2xl font-semibold text-emerald-50">graph theory</h1>
          <div className="mt-2 flex space-x-4">
            <Button variant="ghost" size="sm" className="text-emerald-200/80">
              <Plus className="mr-2 h-4 w-4" />
              Add icon
            </Button>
            <Button variant="ghost" size="sm" className="text-emerald-200/80">
              <Plus className="mr-2 h-4 w-4" />
              Add description
            </Button>
          </div>
        </div>

        {/* Toolbar */}
        <div className="mb-4 flex items-center justify-end space-x-2">
          <Button variant="ghost" size="sm" className="text-zinc-400">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="ghost" size="sm" className="text-zinc-400">
            Sort
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400">
            <List className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400">
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400">
            <LayoutGrid className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-zinc-400">
            <Table className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2">
                <span className="text-yellow-500">⭐</span>
                <h3 className="font-medium text-zinc-50">Leonhard Euler</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">
                Leonhard Euler was a Swiss mathematician, physicist, astronomer, geographer, logician and engineer who founded the
                studies of graph theory and topology and made pioneering and influential discoveries in many other branches of
                mathematics such as analytic number theory, complex analysis, and infinitesimal calculus
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <h3 className="mb-2 font-medium text-zinc-50">What is Graph Theory?</h3>
              <p className="text-sm text-zinc-400">
                In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise
                relations between objects. A graph in this context is made up of vertices (also called nodes or points) that are
                connected by edges (also called links or lines).
              </p>
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Graph theory diagram"
                width={300}
                height={200}
                className="mt-4 rounded-lg"
              />
            </CardContent>
          </Card>

          <Card className={cn("border-zinc-800 bg-zinc-900/50")}>
            <CardContent className="p-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Graph theory visualization"
                  width={400}
                  height={200}
                  className="object-cover"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-zinc-50">A Graph Theory approach to assessing nature's contribution</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Scientific Reports - A Graph Theory approach to assess nature's contribution to people at a global scale
                </p>
                <div className="mt-2 flex space-x-2">
                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-400">graph theory</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs text-zinc-400">data science</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <h3
                className="mb-2 font-medium text-zinc-50 outline-none focus:bg-zinc-800 rounded px-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                Euler's Formula
              </h3>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                For any connected planar graph with V vertices, E edges, and F faces, Euler's formula states:
              </p>
              <div
                className="my-4 text-center text-lg"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  handleContentEdit(e);
                  // Trigger MathJax to reprocess the content
                  if (window.MathJax) window.MathJax.typeset();
                }}
              >
                {"\\[V - E + F = 2\\]"}
              </div>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                This formula is fundamental in graph theory and topology, providing a relationship between the number of vertices, edges, and faces in a planar graph.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <h3
                className="mb-2 font-medium text-zinc-50 outline-none focus:bg-zinc-800 rounded px-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                Chromatic Number
              </h3>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                The chromatic number of a graph G, denoted χ(G), is the minimum number of colors needed to color the vertices of G so that no two adjacent vertices share the same color.
              </p>
              <div
                className="my-4 text-center text-lg"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  handleContentEdit(e);
                  if (window.MathJax) window.MathJax.typeset();
                }}
              >
                {"\\[\\chi(G) \\leq \\Delta(G) + 1\\]"}
              </div>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                Where Δ(G) is the maximum degree of any vertex in the graph. This upper bound is given by Brooks' theorem.
              </p>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900/50">
            <CardContent className="p-4">
              <h3
                className="mb-2 font-medium text-zinc-50 outline-none focus:bg-zinc-800 rounded px-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                Graph Laplacian
              </h3>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                The Laplacian matrix L of a graph with n vertices is defined as:
              </p>
              <div
                className="my-4 text-center text-lg"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => {
                  handleContentEdit(e);
                  if (window.MathJax) window.MathJax.typeset();
                }}
              >
                {"\\[L = D - A\\]"}
              </div>
              <p
                className="text-sm text-zinc-400 outline-none focus:bg-zinc-800 rounded p-1"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => handleContentEdit(e)}
              >
                Where D is the degree matrix and A is the adjacency matrix of the graph. The Laplacian matrix is used in many graph algorithms and has applications in spectral graph theory.
              </p>
            </CardContent>
          </Card>
        </div>
        <Script
          id="MathJax-script"
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
        />
      </main>
    </div>
  )
}

