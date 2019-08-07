/*
 * This file is part of MythicDrops, licensed under the MIT License.
 *
 * Copyright (C) 2019 Richard Harrah
 *
 * Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
 * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
package com.tealcube.minecraft.bukkit.mythicdrops

import org.bukkit.ChatColor
import org.bukkit.entity.EntityType

/**
 * Replaces all arguments (first item in pair) with their values (second item in pair).
 *
 * @param args Pairs of arguments to replace
 * @return copy of [String] with arguments replaced
 */
fun String.replaceArgs(vararg args: Pair<String, String>): String =
    args.fold(this) { acc, pair -> acc.replace(pair.first, pair.second) }

/**
 * Replaces all arguments (first item in pair) with their values (second item in pair).
 *
 * @param args Pairs of arguments to replace
 * @return copy of [String] with arguments replaced
 */
fun String.replaceArgs(args: Collection<Pair<String, String>>): String =
    args.fold(this) { acc, pair -> acc.replace(pair.first, pair.second) }

fun String.chatColorize(): String = this.replace('&', '\u00A7').replace("\u00A7\u00A7", "&")
fun String.unChatColorize(): String = this.replace('\u00A7', '&')

fun String.stripColors(): String = ChatColor.stripColor(this)!! // using double bangs because `this` cannot be null

fun String.startsWithAny(list: List<String>, ignoreCase: Boolean = false): Boolean {
    for (str in list) {
        if (this.startsWith(str, ignoreCase)) {
            return true
        }
    }
    return false
}

fun String.endsWithAny(list: List<String>, ignoreCase: Boolean = false): Boolean {
    for (str in list) {
        if (this.endsWith(str, ignoreCase)) {
            return true
        }
    }
    return false
}

fun String.toEntityType() = try {
    EntityType.valueOf(this)
} catch (ignored: Exception) {
    null
}
