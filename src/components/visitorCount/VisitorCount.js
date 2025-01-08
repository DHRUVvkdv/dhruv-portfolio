// src/components/visitorCount/VisitorCount.js
import React, { useEffect, useState } from 'react';
import { Users } from 'lucide-react';
import "./VisitorCount.css";
import dotenv from "dotenv";

dotenv.config();

const VisitorCount = () => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const url = process.env.REACT_APP_UPSTASH_REDIS_REST_URL + '/incr/visitor_count';

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + process.env.REACT_APP_UPSTASH_REDIS_REST_TOKEN
                    }
                });

                const data = await response.json();
                setCount(data.result);
                setAnimate(true);
            } catch (error) {
                console.error('Error fetching visitor count:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCount();
    }, []);

    return (
        <div className="text-center mt-2">
            <span
                className={`visitor-count 
  ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
                <Users size={14} className="text-gray-500" />
                <span className="text-sm text-gray-500 font-medium">
                    {loading ? (
                        <span className="inline-block w-16 h-4 bg-gray-200 rounded animate-pulse"></span>
                    ) : (
                        `${count.toLocaleString()} visits`
                    )}
                </span>
            </span>

        </div>
    );
};

export default VisitorCount;